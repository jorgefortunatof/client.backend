import { Router } from "express";
import { getRepository } from "typeorm";
import Client from "../models/Client";
import CreateClientPhoneService from "../services/CreateClientPhoneService";
import CreateClienteService from "../services/CreateClientService";
import UpdateClienteService from "../services/UpdateClientService";
import getFiltersFromQuery from "../utils/getFiltersFromQuery";

const routes = Router();

routes.get("/client", async (request, response) => {
	const { name, email, cpf } = request.query;
	const filters = getFiltersFromQuery({ name, email, cpf });

	const clientRepository = getRepository(Client);
	const clientsWithPhones = await clientRepository.find({
		relations: ["phones"],
		where: { ...filters },
	});

	return response.json(clientsWithPhones);
});

routes.post("/client", async (request, response) => {
	const { name, email, cpf } = request.body;

	const createClient = new CreateClienteService();
	const client = await createClient.execute({ name, email, cpf });

	return response.json(client);
});

routes.put("/client/:id", async (request, response) => {
	const { id } = request.params;
	const { name, email, cpf } = request.body;

	const updateClienteService = new UpdateClienteService();
	const client = await updateClienteService.execute({ id, name, email, cpf });

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
