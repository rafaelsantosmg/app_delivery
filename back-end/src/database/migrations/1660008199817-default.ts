import { MigrationInterface, QueryRunner } from "typeorm";

export class default1660008199817 implements MigrationInterface {
    name = 'default1660008199817'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sales" ("id" SERIAL NOT NULL, "total_price" integer NOT NULL, "delivery_address" character varying NOT NULL, "delivery_number" character varying NOT NULL, "sale_date" TIMESTAMP NOT NULL DEFAULT now(), "status" character varying NOT NULL, "user_id" integer, CONSTRAINT "PK_4f0bc990ae81dba46da680895ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "price" integer NOT NULL, "url_image" character varying NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "salesProducts" ("sale_id" integer NOT NULL, "product_id" integer NOT NULL, "quantity" integer NOT NULL, CONSTRAINT "PK_0c4660ed7dea50bc51d753f3a48" PRIMARY KEY ("sale_id", "product_id"))`);
        await queryRunner.query(`ALTER TABLE "salesProducts" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "salesProducts" ADD "quantity" integer NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_6923b02dcac15fcb72f12f4a18" ON "salesProducts" ("sale_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_e95dabb90bf4fae19565bfef25" ON "salesProducts" ("product_id") `);
        await queryRunner.query(`ALTER TABLE "sales" ADD CONSTRAINT "FK_5f282f3656814ec9ca2675aef6f" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "salesProducts" ADD CONSTRAINT "FK_6923b02dcac15fcb72f12f4a18d" FOREIGN KEY ("sale_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "salesProducts" ADD CONSTRAINT "FK_e95dabb90bf4fae19565bfef25d" FOREIGN KEY ("product_id") REFERENCES "sales"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "salesProducts" DROP CONSTRAINT "FK_e95dabb90bf4fae19565bfef25d"`);
        await queryRunner.query(`ALTER TABLE "salesProducts" DROP CONSTRAINT "FK_6923b02dcac15fcb72f12f4a18d"`);
        await queryRunner.query(`ALTER TABLE "sales" DROP CONSTRAINT "FK_5f282f3656814ec9ca2675aef6f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e95dabb90bf4fae19565bfef25"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6923b02dcac15fcb72f12f4a18"`);
        await queryRunner.query(`ALTER TABLE "salesProducts" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "salesProducts" ADD "quantity" integer NOT NULL`);
        await queryRunner.query(`DROP TABLE "salesProducts"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "sales"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
