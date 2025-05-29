import express from "express";
import userRoutes from "../../modules/user/route/user.routes";
import adminRoutes from "../../modules/admin/route/admin.route";
import questionRoutes from "../../modules/questions/route/question.routes";


const router = express.Router();

router.use("/user", userRoutes);
router.use("/admin", adminRoutes);
router.use("/question", questionRoutes);
router.use("/infoCard", questionRoutes);



export default router;
