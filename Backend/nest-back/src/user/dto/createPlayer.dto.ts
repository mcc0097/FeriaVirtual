import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePlayerDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    surname: string;

    @IsString()
    birthdate: Date;

    @IsString()
    role_id: number;

    @IsString()
    phone: number;

    @IsString()
    dni: string;
}