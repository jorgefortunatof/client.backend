import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
} from "typeorm";

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

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

export default Client;
