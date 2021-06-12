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
				name: "cliente_telefone",
				columns: [
					{
						name: "id",
						type: "int",
						isPrimary: true,
					},
					{
						name: "cliente_id",
						type: "int",
						isNullable: false,
					},
					{
						name: "telefone_tipo_id",
						type: "int",
						isNullable: false,
					},
					{
						name: "numero",
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
			"cliente_telefone",
			new TableForeignKey({
				name: "Cliente",
				columnNames: ["cliente_id"],
				referencedColumnNames: ["id"],
				referencedTableName: "cliente",
				onDelete: "SET NULL",
				onUpdate: "CASCADE",
			})
		);

		await queryRunner.createForeignKey(
			"cliente_telefone",
			new TableForeignKey({
				name: "TelefoneTipo",
				columnNames: ["telefone_tipo_id"],
				referencedColumnNames: ["id"],
				referencedTableName: "telefone_tipo",
				onDelete: "SET NULL",
				onUpdate: "CASCADE",
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey("cliente_telefone", "TelefoneTipo");
		await queryRunner.dropForeignKey("cliente_telefone", "ClienteTelefone");
		await queryRunner.dropTable("cliente_telefone");
	}
}
