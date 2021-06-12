import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	JoinColumn,
	ManyToOne,
} from "typeorm";

import Cliente from "./Cliente";

import TelefoneTipo from "./TelefoneTipo";

@Entity("cliente_telefone")
class TelefoneCliente {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	numero: string;

	@ManyToOne(() => TelefoneTipo)
	@JoinColumn({ name: "telefone_tipo_id" })
	telefoneTipo: TelefoneTipo;

	@ManyToOne(() => Cliente)
	@JoinColumn({ name: "cliente_id" })
	cliente: Cliente;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

export default TelefoneCliente;
