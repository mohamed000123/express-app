import {Router} from "express"
import { AdminController } from "../controllers/admin.controller.js";
export const adminRouter = Router()

const adminController = new AdminController()
adminRouter.get("/login", adminController.loginPage) 
adminRouter.post("/login", adminController.login) 