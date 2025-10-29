import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CreatePlayerDto } from 'src/player/dto/createPlayer.dto';
import { PlayerService } from 'src/player/player.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { PlayerEntity } from './player';

@Controller('auth')
export class AuthController {
    constructor (private authService: AuthService, private playerService: PlayerService) {}

    @Post('register')
    async register(@Body() body: CreatePlayerDto) {
        return this.playerService.createPlayer(body);
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req: { player: Omit<PlayerEntity, 'password'> }) {
        return this.authService.login(req.player);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getProfile(@Request() req: { player: { playerId: number; playername: string } }) {
        return await this.playerService.getPlayerById(req.player.playerId);
    }
}


