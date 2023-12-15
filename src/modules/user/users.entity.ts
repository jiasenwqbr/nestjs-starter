import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PhotoEntity } from '../photo/photo.entity';
@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 20 })
  name: string;
  @Column('varchar')
  password: boolean;
  @Column()
  status: boolean;
  @OneToMany(() => PhotoEntity, (photo) => photo.user)
  photos: [];
}
