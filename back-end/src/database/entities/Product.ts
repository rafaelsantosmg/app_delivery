import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import Sale from './Sale';

@Entity('products')
export default class Product {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  price: number;

  @Column({ name: 'url_image' })
  urlImage: string;

  @ManyToMany(() => Sale, (sale) => sale.products)
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
  sale: Sale[];
}
