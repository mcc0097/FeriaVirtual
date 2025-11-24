import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }
    return this.authService.login(user);
  }

    @Post('register')
  async register(@Body() body: { email: string; password: string; role?: string }) {
    return this.authService.register(body);
  }


  // 👇 ESTE ES EL ENDPOINT QUE BUSCAMOS
  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  getProfile(@Req() req) {
    return {
      id: req.user.id,
      email: req.user.email,
      role: req.user.role,
    };
  }
}
