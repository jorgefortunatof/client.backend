import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
} from "typeorm";

@Entity("cliente")
class Cliente {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	cpf: string;

	@Column()
	nome: string;

	@Column()
	email: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

export default Cliente;
