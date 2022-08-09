import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import Sales from './Sale';

@Entity('products')
export default class Products {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  price: number;

  @Column({ name: 'url_image' })
  urlImage: string;

  @ManyToMany(() => Sales, (sale) => sale.products)
  @JoinTable({
    name: 'salesProducts',
    joinColumn: {
      name: 'sale_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'product_id',
      referencedColumnName: 'id',
    },
  })
  sale: Sales[];

  // @ManyToMany(() => Product, product => product.id)
  // @JoinTable({ name: 'products' })
  // product: Product[];
}
