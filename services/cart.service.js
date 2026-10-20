import {prisma} from "../config/db.js"
export  class CartService {
   getCart = async  (id)=>{
    const cart = await prisma.cart.findUnique(({
       where:{id}
    }))
     return  cart  
   }
}