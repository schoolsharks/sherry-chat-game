import { Request, Response, NextFunction } from 'express';
import userService from '../../user/service/user.service';
import { StatusCodes } from 'http-status-codes';
import CompanyService from '../../company/service/company.service';
import AdminService from '../service/admin.service';
import { setCookieOptions } from '../../../utils/cookieOptions';
import {generateAccessToken, generateRefreshToken} from '../../../utils/jwtUtils';

export const registerUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const adminId = req.user?.id;
        const adminService = new AdminService();
        const admin = await adminService.getAdminById(adminId);
        const userservice = new userService();
        const newUser = await userservice.registerUserWithCompanyCheck(req.body);
        res.status(StatusCodes.CREATED).json({ success: true, data: newUser });
    } catch (error) {
        next(error);
    }
};

export const registerCompanyWithAdmin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { companyName, companyCode, adminName, adminEmail } = req.body;

        // Step 1: Register the company
        const companyService = new CompanyService();
        const newCompany = await companyService.createCompany(companyName, companyCode);

        // Step 2: Register the admin with reference to the company
        const adminService = new AdminService();
        const newAdmin = await adminService.createAdmin({
            adminName,
            adminEmail,
            company: newCompany._id, // Reference to the newly created company
        });

        res.status(StatusCodes.CREATED).json({ 
            success: true, 
            data: { company: newCompany, admin: newAdmin } 
        });
    } catch (error) {
        next(error);
    }
};

export const registerAdmin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const adminId = req.user?.id;
        const adminService = new AdminService();
        const admin = await adminService.findAdminById(adminId);

        if (!admin) {
            res.status(StatusCodes.NOT_FOUND).json({ success: false, message: "Admin not found" });
            return;
        }

        const company = admin.company; 
        const { adminName, adminEmail } = req.body;
        const adminservice = new AdminService();
        const newAdmin = await adminservice.createAdmin({ adminName, adminEmail,company });
        res.status(StatusCodes.CREATED).json({ success: true, data: newAdmin });
    } catch (error) {
        next(error);
    }
};

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { adminEmail } = req.body;

        const adminService = new AdminService();
        const admin = await adminService.findAdminByEmail(adminEmail);

        if (!admin) {
            res.status(StatusCodes.UNAUTHORIZED).json({ success: false, message: "Admin not found" });
            return;
        }

        const accessToken = generateAccessToken(admin._id.toString(), "ADMIN");
        const refreshToken = generateRefreshToken(admin._id.toString());

        res.cookie("accessToken", accessToken, setCookieOptions);
        res.cookie("refreshToken", refreshToken, { ...setCookieOptions, httpOnly: true });
        res.json({ success: true, accessToken });
    } catch (error) {
        next(error);
    }

    

    
};

