import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePhoneType1623456295453 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "phone_type",
				columns: [
					{
						name: "id",
						isPrimary: true,
						type: "int",
						isGenerated: true,
						generationStrategy: "increment",
					},
					{
						name: "type",
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
		await queryRunner.dropTable("phone_type");
	}
}
