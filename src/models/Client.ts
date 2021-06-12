import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
} from "typeorm";
import ClientPhone from "./ClientPhone";

@Entity("client")
class Client {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	cpf: string;

	@Column()
	name: string;

	@Column()
	email: string;

	@OneToMany(() => ClientPhone, (clientPhone) => clientPhone.client)
	phones: ClientPhone[];

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

export default Client;
