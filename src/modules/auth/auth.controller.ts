import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/auth/login')
  async login(@Body() req) {
    console.log(req);
    return this.authService.login(req);
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getProfile() {
    const user = {
      username: 'jason',
    };
    return user;
  }
}
