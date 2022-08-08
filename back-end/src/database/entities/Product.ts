import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export default class Products {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  price: number;

  @Column({ name: 'url_image' })
  urlImage: string;
}
