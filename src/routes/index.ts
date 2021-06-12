import { Router } from "express";
import { getRepository } from "typeorm";
import Client from "../models/Client";
import CreateClientPhoneService from "../services/CreateClientPhoneService";
import CreateClienteService from "../services/CreateClientService";

const routes = Router();

routes.get("/client", async (request, response) => {
	const clientRepository = getRepository(Client);
	const clientsWithPhones = await clientRepository.find({
		relations: ["phones"],
	});

	return response.json(clientsWithPhones);
});

routes.post("/client", async (request, response) => {
	const { name, email, cpf } = request.body;
	const createClient = new CreateClienteService();

	const client = await createClient.execute({ name, email, cpf });

	return response.json(client);
});

routes.post("/client/:id/phone", async (request, response) => {
	const { id } = request.params;
	const { phones } = request.body;
	const createClientPhone = new CreateClientPhoneService();

	const clientPhones = await createClientPhone.execute({
		client_id: Number(id),
		phones,
	});

	return response.json(clientPhones);
});

export default routes;
