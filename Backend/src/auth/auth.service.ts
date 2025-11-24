import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { Role } from '../users/entities/user.entity';


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const users = await this.usersService.findAll();
    const user = users.find(u => u.email === email);

    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

    async register(body: { email: string; password: string; role?: string }) {
    // Verificamos si el usuario ya existe
    const existingUser = (await this.usersService.findAll()).find(
      u => u.email === body.email,
    );
    if (existingUser) {
      throw new Error('El usuario ya existe');
    }

    // Creamos el usuario (el UsersService se encarga de encriptar la contraseña)
    const newUser = await this.usersService.create({
      email: body.email,
      password: body.password,
      role: (body.role as Role) || Role.CANDIDATE
, // Por defecto, rol CANDIDATE
    });

    // Devolvemos los datos básicos
    return {
      id: newUser.id,
      email: newUser.email,
      role: newUser.role,
    };
  }

}
