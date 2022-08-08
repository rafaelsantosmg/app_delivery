import {
  Entity,
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from './User';

@Entity('sales')
export default class Sales {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'seller_id' })
  seller_id: number;

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

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  @JoinColumn({ name: 'sellerId' })
  user!: User;
}
