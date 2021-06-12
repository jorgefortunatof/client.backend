import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	JoinColumn,
	ManyToOne,
} from "typeorm";

import Client from "./Client";
import PhoneType from "./PhoneType";

@Entity("client_phone")
class ClientPhone {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	number: string;

	@Column()
	phone_type_id: number;

	@ManyToOne(() => PhoneType)
	@JoinColumn({ name: "phone_type_id" })
	phoneType: PhoneType;

	@Column()
	client_id: number;

	@ManyToOne(() => Client)
	@JoinColumn({ name: "client_id" })
	client: Client;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

export default ClientPhone;
