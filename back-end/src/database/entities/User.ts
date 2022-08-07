import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('users')
export default class Users {
  @PrimaryColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  role!: string;
}
