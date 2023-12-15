import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository, Connection } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './users.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private connection: Connection,
  ) {}
  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find({ relations: ['photos'] });
    // 或者使用queryBuilder
    // return await getRepository(UsersEntity)
    //   .createQueryBuilder("user")
    //   .leftJoinAndSelect("user.photos", "photo")
    //   .getMany()
  }
  async create(user): Promise<UserEntity[]> {
    const { name } = user;
    //const u = await getRepository(UserEntity).findOne({ where: { name } });
    const u = await this.userRepository.findOneBy({ name });
    if (u) {
      throw new HttpException(
        {
          message: 'Input data validation failed',
          error: 'name must be unique.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return await this.userRepository.save(user);
  }
  async createMany(users: UserEntity[]) {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      users.forEach(async (user) => {
        await queryRunner.manager.getRepository(UserEntity).save(user);
      });
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
