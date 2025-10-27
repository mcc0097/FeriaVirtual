import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePlayerDto } from 'src/user/dto/createPlayer.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {}

    async validateUser(body: CreatePlayerDto){
        try {
            const player = await this.userService.findPlayer(body.name);
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
}

    login(user: PlayerEntity) {
        const payload = username: user.name, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }