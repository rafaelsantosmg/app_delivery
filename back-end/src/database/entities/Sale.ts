import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import User from './User';

@Entity('sales')
export default class Sales {
  @PrimaryColumn()
  id!: number;

  @Column('user_id')
  userId!: number;

  @Column('seller_id')
  sellerId!: number;

  @Column('total_price')
  totalPrice!: number;

  @Column('delivery_address')
  deliveryAddress!: string;

  @Column('delivery_number')
  deliveryNumber!: string;

  @CreateDateColumn('sale_date')
  saleDate!: Date;

  @Column()
  status!: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  @JoinColumn({ name: 'sellerId' })
  user!: User;
}
