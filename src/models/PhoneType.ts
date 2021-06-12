import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
} from "typeorm";

@Entity("phone_type")
class PhoneType {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	type: string;

	@Column()
	whatsapp: boolean;

	@CreateDateColumn({ select: false })
	created_at: Date;

	@UpdateDateColumn({ select: false })
	updated_at: Date;
}

export default PhoneType;
