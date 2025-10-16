import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // Crear usuario con contraseña encriptada
  async create(userData: Partial<User>): Promise<User> {
    if (!userData.password) {
      throw new BadRequestException('Password is required');
    }

    const saltRounds = 10;
    const hashedPassword: string = await bcrypt.hash(
      userData.password,
      saltRounds,
    );

    // Creamos el nuevo usuario con la contraseña encriptada
    const newUser = this.userRepository.create({
      ...userData,
      password: hashedPassword,
    });

    return await this.userRepository.save(newUser);
  }

  // Listar usuarios
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
}


