import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { UsersService } from '../users/users.service';
import { Role } from '../users/entities/user.entity';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const usersService = app.get(UsersService);

  const adminEmail = process.env.ADMIN_EMAIL || 'admin@correo.com';
  const adminPass = process.env.ADMIN_PASSWORD || '123456';

  const users = await usersService.findAll();
  const exists = users.find(u => u.email === adminEmail);

  if (!exists) {
    await usersService.create({
      email: adminEmail,
      password: adminPass,
      role: Role.ADMIN,
    });
    console.log(`✅ Admin creado: ${adminEmail} / ${adminPass}`);
  } else {
    console.log(`ℹ️ Admin ya existe: ${adminEmail}`);
  }

  await app.close();
}
bootstrap();
