import { getCart } from "../services/cart.service.js";
export async function getCartController (req,res){
    const id = req.params.id
    const cart  = await getCart(id)
    res.json(cart)
}