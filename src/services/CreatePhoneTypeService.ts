import { getRepository } from "typeorm";
import PhoneType from "../models/PhoneType";

interface Request {
	type: string;
	whatsapp: boolean;
}

class CreatePhoneTypeService {
	async execute({ type, whatsapp }: Request): Promise<PhoneType> {
		const phoneTypeRepository = getRepository(PhoneType);

		const checkTypeExists = await phoneTypeRepository.findOne({
			where: { type, whatsapp },
		});

		if (!checkTypeExists) {
			const phoneType = phoneTypeRepository.create({ type, whatsapp });

			await phoneTypeRepository.save(phoneType);
			return phoneType;
		} else {
			return checkTypeExists;
		}
	}
}

export default CreatePhoneTypeService;
