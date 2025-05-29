import Admin, { IAdmin } from '../model/admin.model';
import AppError from '../../../utils/appError';
import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';


class AdminService {
    async createAdmin({
        adminName,
        adminEmail,
        company
    }: {
        adminName: string;
        adminEmail: string;
        company : mongoose.Types.ObjectId;
    }) {
        const existingAdmin = await Admin.findOne({ email: adminEmail });
        if (existingAdmin) {
            throw new AppError('Admin already exists', StatusCodes.CONFLICT);
        }

        const newAdmin = await Admin.create({
            name: adminName,
            email: adminEmail,
            role: 'admin',
        });

        return newAdmin;
    }

    async findAdminByEmail(adminEmail: string):Promise<IAdmin | null> {
        const admin = await Admin.findOne({ email: adminEmail });
        if (!admin) {
            throw new AppError('Admin not found', StatusCodes.NOT_FOUND);
        }
        return admin;
    }

    async findAdminById(adminId: mongoose.Types.ObjectId): Promise<IAdmin> {
        const admin = await Admin.findById(adminId);
        if (!admin) {
            throw new AppError('Admin not found', StatusCodes.NOT_FOUND);
        }
        return admin;
    }

    async getAdminById(adminId: mongoose.Types.ObjectId): Promise<IAdmin | null> {
        const admin = await Admin.findById(adminId);
        return admin;
    }

}

export default AdminService;