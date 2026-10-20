import { CartService } from "../services/cart.service.js";
export class CartController {
   constructor (){
     this.cartService = new CartService()
   }
   getCart = async (req,res)=> {
    const id = req.params.id
    const cart  = await  this.cartService.getCart(id)
    res.json(cart)
}
}