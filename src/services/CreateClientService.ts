import { getRepository } from "typeorm";
import AppError from "../errors/AppError";
import Client from "../models/Client";

interface Request {
	name: string;
	email: string;
	cpf: string;
}

class CreateClienteService {
	async execute({ name, email, cpf }: Request): Promise<Client> {
		const clientRepository = getRepository(Client);

		const checkClientExists = await clientRepository.findOne({
			where: { email },
		});

		if (checkClientExists) {
			throw new AppError("Já existe um cliente com esse e-mail.");
		}

		const client = clientRepository.create({ name, email, cpf });

		await clientRepository.save(client);

		return client;
	}
}

export default CreateClienteService;
