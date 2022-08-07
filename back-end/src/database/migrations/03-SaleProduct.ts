import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class SaleProduct1659826709906 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "salesProducts",
        columns: [
          {
            name: "sale_id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "product_id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "quantity",
            type: "int",
          },
        ],
        foreignKeys: [
          {
            name: "fk_sale",
            columnNames: ["sale_id"],
            referencedTableName: "sales",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "fk_product",
            columnNames: ["product_id"],
            referencedTableName: "products",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("salesProducts");
  }
}
