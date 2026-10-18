import { signup } from "../services/client.service";
export async function signup (req,res){
    const {email, password} = req.body()
   const token =  await signup(email, password)
   res.json(token)
}