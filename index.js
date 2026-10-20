import express from "express"
import { adminRouter } from "./routes/admin.route.js";
import { clientRouter } from "./routes/client.route.js";
import { productsRouter } from "./routes/product.route.js";
import { cartRouter } from "./routes/cart.route.js";
import {prisma} from "./config/db.js"
import "dotenv/config.js"

const app = express()
app.use(express.json())  // body parser middleware to parse JSON request bodies
app.use(express.static("public"))
// getting body data from forms in ejs
app.use(express.urlencoded())

app.set("view engine","ejs")
app.set("views", import.meta.dirname + "/views")
async function startServer (){
  try {
    await prisma.$connect()
    console.log("connected to Db successfully");
    app.listen(3000,()=>{
    console.log("server is listening on port 3000");
})
  }catch(e){
    console.error(`Db connection failed: ${e}`);
  }
}

startServer()
app.get("/",  (req,res)=>{
res.json("server is working")
res.end()
})

app.use("/admins",adminRouter)
app.use("/client",clientRouter)
app.use("/product",productsRouter)
app.use("/cart", cartRouter)

