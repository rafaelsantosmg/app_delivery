import { Entity, Column, PrimaryColumn, JoinTable, ManyToMany } from 'typeorm';
import Sale from './Sale';
import Product from './Product';

@Entity('salesProducts')
export default class SalesProducts {
  @PrimaryColumn({ name: 'sale_id' })
  saleId: number;

  @PrimaryColumn({ name: 'product_id' })
  productId: number;

  @Column()
  quantity: number;
}
