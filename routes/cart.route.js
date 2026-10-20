import {Router} from "express"
import { CartController } from "../controllers/cart.controller.js"
export const cartRouter = Router()
const cartController = new CartController()

cartRouter.get("/:id",  cartController.getCart)


