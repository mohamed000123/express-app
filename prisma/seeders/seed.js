import {prisma} from "../../config/db.js"
import { seedSuperAdmin } from "./superAdmin.seeder.js"
import { seedProducts } from "./productSeed.js"

const admin = await seedSuperAdmin()
console.log("////////////",admin.id,"////////////////////");

await seedProducts(admin.id)
await prisma.$disconnect()