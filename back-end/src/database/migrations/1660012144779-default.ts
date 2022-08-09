import { MigrationInterface, QueryRunner } from "typeorm";

export class default1660012144779 implements MigrationInterface {
    name = 'default1660012144779'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "salesProducts" DROP CONSTRAINT "FK_6923b02dcac15fcb72f12f4a18d"`);
        await queryRunner.query(`ALTER TABLE "salesProducts" DROP CONSTRAINT "FK_e95dabb90bf4fae19565bfef25d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6923b02dcac15fcb72f12f4a18"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e95dabb90bf4fae19565bfef25"`);
        await queryRunner.query(`ALTER TABLE "salesProducts" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "salesProducts" ADD "quantity" integer NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_6923b02dcac15fcb72f12f4a18" ON "salesProducts" ("sale_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_e95dabb90bf4fae19565bfef25" ON "salesProducts" ("product_id") `);
        await queryRunner.query(`ALTER TABLE "salesProducts" ADD CONSTRAINT "FK_6923b02dcac15fcb72f12f4a18d" FOREIGN KEY ("sale_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "salesProducts" ADD CONSTRAINT "FK_e95dabb90bf4fae19565bfef25d" FOREIGN KEY ("product_id") REFERENCES "sales"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "salesProducts" DROP CONSTRAINT "FK_e95dabb90bf4fae19565bfef25d"`);
        await queryRunner.query(`ALTER TABLE "salesProducts" DROP CONSTRAINT "FK_6923b02dcac15fcb72f12f4a18d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e95dabb90bf4fae19565bfef25"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6923b02dcac15fcb72f12f4a18"`);
        await queryRunner.query(`ALTER TABLE "salesProducts" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "salesProducts" ADD "quantity" integer NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_e95dabb90bf4fae19565bfef25" ON "salesProducts" ("product_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_6923b02dcac15fcb72f12f4a18" ON "salesProducts" ("sale_id") `);
        await queryRunner.query(`ALTER TABLE "salesProducts" ADD CONSTRAINT "FK_e95dabb90bf4fae19565bfef25d" FOREIGN KEY ("product_id") REFERENCES "sales"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "salesProducts" ADD CONSTRAINT "FK_6923b02dcac15fcb72f12f4a18d" FOREIGN KEY ("sale_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
