import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Post('/create')
  async create(@Body() req: CreateUserDto) {
    console.log('param:', req);
    const newParam = { ...req, status: true };
    console.log('newParam:', newParam);
    await this.userService.create(newParam);
  }
  @Post('/many')
  async creteMany(@Body() users) {
    console.log('users:', users);
    const newUsers = users.map((user) => ({ ...user, status: true }));
    await this.userService.createMany(newUsers);
    return true;
  }
}
