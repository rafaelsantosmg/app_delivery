import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Sales from './Sale';

@Entity('users')
export default class Users {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @OneToMany(() => Sales, (sale) => sale.user)
  sales: Sales;
}
