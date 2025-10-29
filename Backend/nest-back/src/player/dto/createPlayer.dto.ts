import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePlayerDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsOptional()
    surname?: string;

    @IsOptional()
    birthdate?: Date;

    @IsOptional()
    phone?: number;

    @IsOptional()
    @IsString()
    dni?: string;
}