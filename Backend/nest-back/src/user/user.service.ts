import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreatePlayerDto } from './dto/createPlayer.dto';
import * as bcrypt from 'bcrypt';   


@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}
    
    async createPlayer(body: CreatePlayerDto) {
        try{
            // Here I used salt rounds directly instead of genSalt()
            const hashedPassword = await bcrypt.hash(body.password, 10);
            const newPlayer = await this.prisma.players.create({
                data: {
                    name: body.name,
                    password: hashedPassword,
                    surname: body.surname,
                    birthdate: body.birthdate,
                    role_id: body.role_id,
                    phone: body.phone,
                    dni: body.dni
                }
            });
            const { password, ...result } = newPlayer;
            return result;
        } catch (error) {
            if(error instanceof Error) {
                throw new InternalServerErrorException(error.message);
            }
        }
    }

    async findPlayer(name: string) {
        try {
            const player = await this.prisma.players.findFirst({where: { name }});
            if (player) {
                return player;
            }
            return null;
        } catch (error) {
            if(error instanceof Error) {
                throw new InternalServerErrorException(error.message);
            }
        }
    }
}