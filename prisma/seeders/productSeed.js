import { prisma } from "../../config/db.js";

export async function seedProducts (adminId){
    

await prisma.product.createMany({
  data:[
    {name: "product one", price:100 , adminId},
    {name: "product one", price:100, adminId},
    {name: "product one", price:100, adminId}
  ]
})
console.log("products is seeded successfully")
}