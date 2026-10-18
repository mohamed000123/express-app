import { prisma } from "../../config/db.js";

export async function seedSuperAdmin (){
    
const {SUPER_ADMIN_NAME,SUPER_ADMIN_EMAIL,SUPER_ADMIN_PASSWORD}= process.env
const superAdmin = await prisma.user.upsert({
    create:{
        name:SUPER_ADMIN_NAME,
        password:SUPER_ADMIN_PASSWORD,
        role:"super_admin",
        email:SUPER_ADMIN_EMAIL
    },
    where:{
        email:SUPER_ADMIN_EMAIL
    },update:{
        role:"super_admin"
    }
})
console.log("super admin is seeded successfully")
return superAdmin
}