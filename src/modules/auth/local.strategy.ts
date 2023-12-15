import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    console.log('username:', username, 'password:', password);
    return { username, password };
    const user = await this.authService.validiateUser(username, password);
    if (!user) {
      throw new HttpException(
        { message: 'authoried failed', error: 'please try again' },
        HttpStatus.BAD_REQUEST,
      );
    }
    return user;
  }
}
