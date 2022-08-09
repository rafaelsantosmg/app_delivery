import {
  Entity,
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  ManyToMany,
} from 'typeorm';
import Products from './Product';
import User from './User';

@Entity('sales')
export default class Sales {
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

  @ManyToOne(() => User, (user) => user.sales)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToMany(() => Products, (product) => product.sale)
  products: Products[];
}
