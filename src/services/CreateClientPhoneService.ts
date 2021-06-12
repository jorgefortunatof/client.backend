import { getRepository } from "typeorm";

import CreatePhoneTypeService from "./CreatePhoneTypeService";
import ClientPhone from "../models/ClientPhone";

interface Phone {
	number: string;
	type: string;
	whatsapp: boolean;
}

interface Request {
	client_id: number;
	phones: Phone[];
}

class CreateClientPhonesService {
	async execute({ client_id, phones }: Request) {
		const createPhoneTypeService = new CreatePhoneTypeService();
		const clientPhoneRepository = getRepository(ClientPhone);

		for (const phone of phones) {
			const checkClientPhoneExists = clientPhoneRepository.findOne({
				where: { number: phone.number, client_id },
			});

			if (!checkClientPhoneExists) {
				const newPhoneType = await createPhoneTypeService.execute({
					type: phone.type,
					whatsapp: phone.whatsapp,
				});

				const clientPhone = clientPhoneRepository.create({
					client_id,
					phone_type_id: newPhoneType.id,
					number: phone.number,
				});

				await clientPhoneRepository.save(clientPhone);
			}
		}
	}
}

export default CreateClientPhonesService;
