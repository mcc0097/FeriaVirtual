import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompaniesModule } from './companies/companies.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT ?? '5432', 10) || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || '123456',
      database: process.env.DB_NAME || 'feriavirtual',
      ssl: false,
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV !== 'production',
      logging: true, // Enable full logging
      logger: 'advanced-console',
    }),
    CompaniesModule,
  ],
})
export class AppModule {}

// CREATE DATABASE feriavirtual;
// \conninfo
// C:\Program Files\PostgreSQL\{version}\data\pg_hba.conf
