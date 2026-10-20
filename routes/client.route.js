import {Router} from "express"
import { ClientController } from "../controllers/client.controller.js"
export const clientRouter = Router()
const clientController = new ClientController()

// auth
clientRouter.post("/signup", clientController.signup)
