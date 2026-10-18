import {Router} from "express"
import { getCartController } from "../controllers/cart.controller.js"
export const cartRouter = Router()
// 

cartRouter.get("/:id",  getCartController)


