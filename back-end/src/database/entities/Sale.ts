import {
  Entity,
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  ManyToMany,
} from 'typeorm';
import Product from './Product';
import Register from './Register';

@Entity('sales')
export default class Sale {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'total_price' })
  totalPrice: number;

  @Column({ name: 'delivery_address' })
  deliveryAddress: string;

  @Column({ name: 'delivery_number' })
  deliveryNumber: string;

  @CreateDateColumn({ name: 'sale_date' })
  saleDate: Date;

  @Column()
  status: string;

  @ManyToOne(() => Register, (register) => register.sales)
  @JoinColumn({ name: 'register_id' })
  register: Register;

  @ManyToMany(() => Product, (product) => product.sale)
  products: Product[];
}
