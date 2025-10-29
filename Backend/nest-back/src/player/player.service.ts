import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreatePlayerDto } from './dto/createPlayer.dto';
import * as bcrypt from 'bcrypt';   


@Injectable()
export class PlayerService {
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
                    role_id: 4, // Default role: guest (you can change this)
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

    async findPlayerForAuth(name: string) {
        try {
            const player = await this.prisma.players.findFirst({where: { name }});
            return player; // Includes password for authentication
        } catch (error) {
            if(error instanceof Error) {
                throw new InternalServerErrorException(error.message);
            }
        }
    }
    // This method is used to get player data without password
    async findPlayer(name: string) {
        try {
            const player = await this.prisma.players.findFirst({where: { name }});
            if (player) {
                const { password, ...playerWithoutPassword } = player;
                return playerWithoutPassword;
            }
            return null;
        } catch (error) {
            if(error instanceof Error) {
                throw new InternalServerErrorException(error.message);
            }
        }
    }

    async getPlayerById(id: number) {
        try {
            const player = await this.prisma.players.findFirst({where: { id }});
            if(!player) {
                throw new NotFoundException(`Player with ID ${id} not found`);
            }
            const { password, ...playerWithoutPassword } = player;
            return playerWithoutPassword;
        } catch (error) {
            if(error instanceof NotFoundException) {
                throw error;
            }
            if(error instanceof Error) {
                throw new InternalServerErrorException(error.message);
            }
        }   
    }

    async updatePlayerRole(id: number, role_id: number) {
        try {
            // Verify player exists
            const player = await this.prisma.players.findFirst({ where: { id } });
            if (!player) {
                throw new NotFoundException(`Player with ID ${id} not found`);
            }

            // Update the role
            const updatedPlayer = await this.prisma.players.update({
                where: { id },
                data: { role_id }
            });

            const { password, ...result } = updatedPlayer;
            return result;
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            if (error instanceof Error) {
                throw new InternalServerErrorException(error.message);
            }
        }
    }
}