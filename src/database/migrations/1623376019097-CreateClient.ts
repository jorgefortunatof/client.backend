import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClient1623376019097 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "client",
				columns: [
					{
						name: "id",
						type: "int",
						isPrimary: true,
						isGenerated: true,
						generationStrategy: "increment",
					},
					{
						name: "cpf",
						type: "varchar(11)",
						isNullable: false,
						isUnique: true,
					},
					{
						name: "name",
						type: "varchar(60)",
						isNullable: false,
					},
					{
						name: "email",
						type: "varchar(100)",
						isNullable: false,
						isUnique: true,
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
		await queryRunner.dropTable("client");
	}
}
