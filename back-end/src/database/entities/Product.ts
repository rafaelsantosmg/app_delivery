import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('products')
export default class Products {
  @PrimaryColumn()
  id!: number;

  @Column()
  price!: number;

  @Column('url_image')
  urlImage!: string;
}
