import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import {
  ApiTags, ApiOperation, ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
 
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
	private readonly authService: AuthService,
  ) {}
 
  @Post('register')
  @ApiOperation({ summary: 'Зареєструвати нового користувача' })
  @ApiResponse({ status: 201, description: 'Користувач зареєстрований' })
  @ApiResponse({ status: 400, description: 'Помилка валідації' })
  register(@Body() dto: RegisterDto) {
	return this.authService.register(dto);
  }
 
  @Post('login')
  @ApiOperation({ summary: 'Увійти до системи' })
  @ApiResponse({ status: 200, description: 'Успішний вхід' })
  @ApiResponse({ status: 401, description: 'Невірні облікові дані' })
  @HttpCode(HttpStatus.OK)
  login(@Body() dto: LoginDto) {
	return this.authService.login(dto);
  }
}
