import { getRepository } from "typeorm";

import ClientPhone from "../models/ClientPhone";
import PhoneType from "../models/PhoneType";

interface Phone {
	number: string;
	type: string;
	whatsapp: boolean;
}

interface Request {
	client_id: number;
	phones: Phone[];
}

class CreateClientPhoneService {
	async execute({ client_id, phones }: Request): Promise<ClientPhone[]> {
		const phoneTypeRepository = getRepository(PhoneType);
		const clientPhoneRepository = getRepository(ClientPhone);

		let clientPhones: ClientPhone[] = [];

		for (const phone of phones) {
			const checkClientPhoneExists = await clientPhoneRepository.findOne({
				where: { number: phone.number, client_id },
			});

			if (!checkClientPhoneExists) {
				const phoneType = phoneTypeRepository.create({
					type: phone.type,
					whatsapp: phone.whatsapp,
				});

				await phoneTypeRepository.save(phoneType);

				const clientPhone = clientPhoneRepository.create({
					client_id,
					phone_type_id: phoneType.id,
					number: phone.number,
				});

				clientPhones.push(clientPhone);
			}
		}

		await clientPhoneRepository.save(clientPhones);

		return clientPhones;
	}
}

export default CreateClientPhoneService;
