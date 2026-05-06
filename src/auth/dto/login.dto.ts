import { IsEmail, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
 
export class LoginDto {
  @ApiProperty({
	example: 'user@example.com',
	description: 'Електронна пошта',
  })
  @IsEmail()
  email: string;
 
  @ApiProperty({
	example: 'password123',
	description: 'Пароль',
  })
  @IsString()
  password: string;
}
