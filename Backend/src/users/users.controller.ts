import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@Controller('users')
@UseGuards(RolesGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Solo ADMIN puede listar todos los usuarios
  @Get()
  @Roles('ADMIN')
  async findAll() {
    return await this.usersService.findAll();
  }

  // Cualquiera puede registrarse
  @Post()
  async create(@Body() body: Partial<User>) {
    return await this.usersService.create(body);
  }
}
