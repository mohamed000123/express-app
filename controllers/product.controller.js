import { ProductService } from "../services/product.service.js";
export class ProductController {
   constructor (){
      this.productService = new ProductService()
      this.findAll = this.findAll.bind(this)
   }
   async findAll (req,res){
  
    
  const products = await this.productService.findAll()
  res.json(products)
}

}

