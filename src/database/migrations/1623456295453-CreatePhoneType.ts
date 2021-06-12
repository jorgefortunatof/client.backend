import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePhoneType1623456295453 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "telefone_tipo",
				columns: [
					{
						name: "id",
						isPrimary: true,
						type: "int",
					},
					{
						name: "tipo",
						type: "varchar(40)",
						isNullable: false,
					},
					{
						name: "whatsapp",
						type: "bool",
						isNullable: false,
					},
					{
						name: "created_at",
						type: "timestamp",
						default: "now()",
					},
					{
						name: "updated_at",
						type: "timestamp",
						default: "now()",
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("telefone_tipo");
	}
}
