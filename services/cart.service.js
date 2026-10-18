import {prisma} from "../config/db.js"
export async function getCart (id){
 const cart = await prisma.cart.findUnique(({
    where:{id}
 }))
  return  cart  
}