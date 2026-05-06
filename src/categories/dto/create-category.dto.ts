import { IsString, IsOptional, MaxLength, MinLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

 
export class CreateCategoryDto {
  @ApiProperty({
	example: 'Electronics',
	description: 'Назва категорії',
  })
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  name: string;
 
  @ApiPropertyOptional({
	example: 'Electronic devices',
	description: 'Опис категорії',
  })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string;
}

