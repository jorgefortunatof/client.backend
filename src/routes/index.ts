import { Router } from "express";
import CreateClienteService from "../services/CreateClientService";

const routes = Router();

routes.post("/client", async (request, response) => {
	const { name, email, cpf } = request.body;
	const createClient = new CreateClienteService();

	const newClient = await createClient.execute({ name, email, cpf });

	return response.json(newClient);
});

export default routes;
