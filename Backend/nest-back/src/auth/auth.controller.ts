import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CreatePlayerDto } from 'src/player/dto/createPlayer.dto';
import { PlayerService } from 'src/player/player.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor (private authService: AuthService, private playerService: PlayerService) {}

    @Post('auth/register')
    async register(@Body() body: CreatePlayerDto) {
        return this.playerService.createPlayer(body);
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req) {
        return this.authService.login(req.player);
    }

}

@UseGuards(JwtAuthGuard)
@Get('auth/profile')
async getProfile(@Request() req) {
    return await this.playerService.getPlayerById(req.player.playerId);
}


