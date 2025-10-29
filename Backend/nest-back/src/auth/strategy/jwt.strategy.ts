import {ExtractJwt, Strategy} from 'passport-jwt';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport';
import {PlayerService} from 'src/player/player.service';
import {JWT_SECRET} from '../../../constants/jwt-key';
import { PayloadEntity } from '../payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private playerService: PlayerService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: JWT_SECRET,
        });
    }

    validate(payload: PayloadEntity): {playerId: number, playername: string, role_id: number} {
        return {playerId: payload.sub, playername: payload.playername, role_id: payload.role_id};
    }
}