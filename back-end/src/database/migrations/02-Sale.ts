import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Sale1659826696388 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "sales",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "user_id",
            type: "int",
          },
          {
            name: "seller_id",
            type: "int",
          },
          {
            name: "total_price",
            type: "decimal(9,2)",
          },
          {
            name: "delivery_address",
            type: "varchar(100)",
          },
          {
            name: "delivery_number",
            type: "varchar(50)",
          },
          {
            name: "sale_date",
            type: "date",
            default: "now()",
          },
          {
            name: "status",
            type: "varchar(50)",
          },
        ],
        foreignKeys: [
          {
            name: "fk_user",
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "fk_seller",
            columnNames: ["seller_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("sales");
  }
}
