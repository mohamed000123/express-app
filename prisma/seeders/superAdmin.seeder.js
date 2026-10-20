import { prisma } from "../../config/db.js";
import bcrypt from "bcrypt"
export async function seedSuperAdmin (){
    
const {SUPER_ADMIN_NAME,SUPER_ADMIN_EMAIL,SUPER_ADMIN_PASSWORD}= process.env
 const password = await bcrypt.hash(SUPER_ADMIN_PASSWORD,10)
const superAdmin = await prisma.user.upsert({
    create:{
        name:SUPER_ADMIN_NAME,
        password:password,
        role:"super_admin",
        email:SUPER_ADMIN_EMAIL
    },
    where:{
        email:SUPER_ADMIN_EMAIL
    },update:{
        role:"super_admin",
        password:password
    }
})
console.log("super admin is seeded successfully")
return superAdmin
}