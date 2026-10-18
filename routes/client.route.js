import {Router} from "express"
import { signup as controllerSignup } from "../controllers/client.controller"
export const clientRouter = Router()

// auth
clientRouter.post("/signup", controllerSignup)
