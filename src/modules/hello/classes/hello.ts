import { ApiProperty } from '@nestjs/swagger';

export enum UserRole {
  Admin = 'Admin',
  User = 'User',
}

export class Hello {
  @ApiProperty({ example: 'Kitty', description: 'The name of the Cat' })
  name: string;
  @ApiProperty({ example: 3, description: 'The age of the cat' })
  age: number;
  @ApiProperty({ example: 'Maine Conn', description: 'the Main conn' })
  breed: string;
  @ApiProperty({ enum: UserRole })
  role: UserRole;
}
