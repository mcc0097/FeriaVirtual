import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PlayerModule } from './player/player.module';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [AuthModule, PlayerModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
