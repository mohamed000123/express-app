import {Router} from "express"
import { ProductController } from "../controllers/product.controller.js"
export const productsRouter = Router()

const productController = new ProductController()
productsRouter.get("/",  productController.findAll)


// productsRouter.get("/products/search",(req,res)=>{

// })
// productsRouter.get("/products/search/:id",(req,res)=>{

// })

