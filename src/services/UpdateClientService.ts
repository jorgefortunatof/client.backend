import { getRepository } from "typeorm";
import AppError from "../errors/AppError";
import Client from "../models/Client";

interface Request {
	id: string;
	name: string;
	email: string;
	cpf: string;
}

class UpdateClienteService {
	async execute({ id, name, email, cpf }: Request): Promise<Client> {
		const clientRepository = getRepository(Client);

		const numberId = Number(id);

		if (!numberId || numberId < 1) {
			throw new AppError("Id do cliente não foi informado ou é inválido.");
		}

		const client = await clientRepository.save({
			id: numberId,
			name,
			email,
			cpf,
		});

		return client;
	}
}

export default UpdateClienteService;
