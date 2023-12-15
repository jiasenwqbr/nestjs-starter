import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from '../user/users.entity';
@Entity({ name: 'photo' })
export class PhotoEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 80 })
  url: string;

  @ManyToOne(() => UserEntity, (user) => user.photos)
  user: UserEntity;
}
