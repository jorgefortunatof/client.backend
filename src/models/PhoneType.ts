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

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

export default PhoneType;
