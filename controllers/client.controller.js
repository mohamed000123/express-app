import { ClientService } from "../services/client.service.js";

export class ClientController {
    constructor() {
        this.clientService = new ClientService();
    }

    signup = async (req, res) => {
        const { email, password } = req.body;
        const token = await this.clientService.signup(email, password);
        res.json(token);
    };
}