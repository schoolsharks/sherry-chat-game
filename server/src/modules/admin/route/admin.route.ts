import express from 'express';
import * as adminControllers from "../../admin/controllers/admin.controllers";
import asyncHandeler from 'express-async-handler';
import { authenticateUser,authorizeRoles } from '../../../middlewares/authMiddleware';

const router = express.Router();
router.post(
    '/registerUser',
    authenticateUser,
    authorizeRoles('ADMIN'),
    asyncHandeler(adminControllers.registerUser)
);
router.post(
    '/registerCompanyWithAdmin',
    asyncHandeler(adminControllers.registerCompanyWithAdmin)
);

router.post(
    '/registerAdmin',
    asyncHandeler(adminControllers.registerAdmin)
);

router.post(
    '/login',
    asyncHandeler(adminControllers.login)
);

export default router;