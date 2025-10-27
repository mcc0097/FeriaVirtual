import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePlayerDto } from 'src/player/dto/createPlayer.dto';
import { PlayerService } from 'src/player/player.service';
import * as bcrypt from 'bcrypt';
import { PlayerEntity } from './strategy/player';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private playerService: PlayerService, private jwtService: JwtService) {}

    async validateUser(body: CreatePlayerDto){
        try {
            const player = await this.playerService.findPlayer(body.name);
            const matchResult = await bcrypt.compare(
                body.password,
                player?.password ?? ''
            );
            if(player && matchResult){
                const { password, ...result } = player;
                return result;
            }
            return null;
        } catch (error) {
            if (error instanceof Error) throw new InternalServerErrorException(error.message);
        }
    }

    login(player: PlayerEntity) {
        const payload = { playername: player.name, sub: player.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
