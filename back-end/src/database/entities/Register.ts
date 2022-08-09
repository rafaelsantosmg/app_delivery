import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Sales from './Sale';

@Entity('registers')
export default class Register {
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

  @OneToMany(() => Sales, (sale) => sale.register)
  sales: Sales;
}
