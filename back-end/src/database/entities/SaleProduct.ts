import { Entity, Column, PrimaryColumn, JoinTable, ManyToMany } from 'typeorm';
import Sale from './Sale';
import Product from './Product';

@Entity('sales')
export default class SalesProducts {
  @PrimaryColumn('sale_id')
  saleId!: number;

  @PrimaryColumn('product_id')
  productId!: number;

  @Column()
  quantity!: number;

  @ManyToMany((type) => Sale)
  @JoinTable({ name: 'saleId' })
  sale!: Sale[];

  @ManyToMany((type) => Product)
  @JoinTable({ name: 'productId' })
  product!: Product[];
}
