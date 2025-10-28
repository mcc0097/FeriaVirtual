import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PlayerService } from 'src/player/player.service';
import { LocalStrategy } from './strategy/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from '../../constants/jwt-key';
import { JwtStrategy } from './strategy/jwt.strategy';


@Module({
  imports: [PassportModule, JwtModule.register({ 
    secret: JWT_SECRET,
    signOptions: { expiresIn: '8h' },
  })
  ],
  controllers: [AuthController],
  providers: [AuthService, PlayerService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
