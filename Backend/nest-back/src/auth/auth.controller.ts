import { Body, Controller, Get, Param, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CreatePlayerDto } from 'src/player/dto/createPlayer.dto';
import { PlayerService } from 'src/player/player.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AdminGuard } from './guards/admin.guard';
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
    login(@Request() req: { user: Omit<PlayerEntity, 'password'> }) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getProfile(@Request() req: { user: { playerId: number; playername: string; role_id: number } }) {
        return await this.playerService.getPlayerById(req.user.playerId);
    }

    @UseGuards(JwtAuthGuard, AdminGuard)
    @Patch('users/:id/role')
    async updateUserRole(
        @Param('id') id: string, 
        @Body() body: { role_id: number }
    ) {
        return await this.playerService.updatePlayerRole(Number(id), body.role_id);
    }
}


