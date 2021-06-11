import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClients1623376019097 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "clients",
				columns: [
					{
						name: "id",
						type: "int",
						isPrimary: true,
					},
					{
						name: "cpf",
						type: "varchar(11)",
						isNullable: false,
						isUnique: true,
					},
					{
						name: "nome",
						type: "varchar(60)",
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
		await queryRunner.dropTable("clients");
	}
}
