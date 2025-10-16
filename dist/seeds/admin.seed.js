"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("../app.module");
const users_service_1 = require("../users/users.service");
const user_entity_1 = require("../users/entities/user.entity");
async function bootstrap() {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const usersService = app.get(users_service_1.UsersService);
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@correo.com';
    const adminPass = process.env.ADMIN_PASSWORD || '123456';
    const users = await usersService.findAll();
    const exists = users.find(u => u.email === adminEmail);
    if (!exists) {
        await usersService.create({
            email: adminEmail,
            password: adminPass,
            role: user_entity_1.Role.ADMIN,
        });
        console.log(`✅ Admin creado: ${adminEmail} / ${adminPass}`);
    }
    else {
        console.log(`ℹ️ Admin ya existe: ${adminEmail}`);
    }
    await app.close();
}
bootstrap();
//# sourceMappingURL=admin.seed.js.map