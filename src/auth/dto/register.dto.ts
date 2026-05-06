import {
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
  IsOptional,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
 
export class RegisterDto {
  @ApiProperty({
	example: 'user@example.com',
	description: 'Електронна пошта ',
  })
  @IsEmail()
  email: string;
 
  @ApiProperty({
	example: 'password123',
	description: 'Пароль',
	minLength: 8,
	maxLength: 128,
  })
  @IsString()
  @MinLength(8)
  @MaxLength(128)
  password: string;
 
  @ApiPropertyOptional({
	example: 'Назар Іваненко',
	description: 'Повне ім\'я',
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  name?: string;
}