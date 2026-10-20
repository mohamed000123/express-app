
// import { AuthService } from "../services/auth.service.js";
export class AdminController {
    constructor() {  
        // this.authService = new AuthService();   
    }
    loginPage = async (req, res) => {
        res.render("admin/login");
    };
    login = async (req, res) => {
    //    const data = req.body
    //    if (data.email === "" || data.password === "") { 
    //      res.status(400).json({ message: "Email and password are required" });
    //    }
    //    await this.authService.login
    };
}