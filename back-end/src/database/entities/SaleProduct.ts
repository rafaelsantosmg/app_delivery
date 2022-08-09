import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('salesProducts')
export default class SalesProducts {
  @PrimaryColumn({ name: 'sale_id' })
  saleId: number;

  @PrimaryColumn({ name: 'product_id' })
  productId: number;

  @Column()
  quantity: number;
}
