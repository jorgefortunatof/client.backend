import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey,
} from "typeorm";

export class CreateClientPhone1623456679369 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "client_phone",
				columns: [
					{
						name: "id",
						type: "int",
						isPrimary: true,
						isGenerated: true,
						generationStrategy: "increment",
					},
					{
						name: "client_id",
						type: "int",
						isNullable: false,
					},
					{
						name: "phone_type_id",
						type: "int",
						isNullable: false,
					},
					{
						name: "number",
						type: "varchar(11)",
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

		await queryRunner.createForeignKey(
			"client_phone",
			new TableForeignKey({
				name: "Client",
				columnNames: ["client_id"],
				referencedColumnNames: ["id"],
				referencedTableName: "client",
				onDelete: "SET NULL",
				onUpdate: "CASCADE",
			})
		);

		await queryRunner.createForeignKey(
			"client_phone",
			new TableForeignKey({
				name: "PhoneType",
				columnNames: ["phone_type_id"],
				referencedColumnNames: ["id"],
				referencedTableName: "phone_type",
				onDelete: "SET NULL",
				onUpdate: "CASCADE",
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey("client_phone", "PhoneType");
		await queryRunner.dropForeignKey("client_phone", "ClientPhone");
		await queryRunner.dropTable("client_phone");
	}
}
