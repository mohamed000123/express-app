import {prisma} from "../config/db.js"

export class ProductService {
   constructor (){

   }
async findAll (){
const products = await prisma.product.findMany()
return products
}
}

