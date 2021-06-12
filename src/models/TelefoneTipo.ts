import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
} from "typeorm";

@Entity("telefone_tipo")
class TelefoneTipo {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	tipo: string;

	@Column()
	whatsapp: boolean;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

export default TelefoneTipo;
