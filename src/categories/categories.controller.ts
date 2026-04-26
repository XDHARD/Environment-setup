import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
<<<<<<< HEAD
=======
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
>>>>>>> d599266 (use DTOs in controllers/services, add TrimPipe)
 
@Controller('api/categories')
export class CategoriesController {
  constructor(
	private readonly categoriesService: CategoriesService,
  ) {}
 
  @Get()
  findAll() {
	return this.categoriesService.findAll();
  }
 
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
	return this.categoriesService.findOne(id);
  }
 
  @Post()
<<<<<<< HEAD
  create(@Body() body: { name: string; description?: string }) {
	return this.categoriesService.create(body);
=======
  create(@Body() dto: CreateCategoryDto) {
	return this.categoriesService.create(dto);
>>>>>>> d599266 (use DTOs in controllers/services, add TrimPipe)
  }
 
  @Patch(':id')
  update(
	@Param('id', ParseIntPipe) id: number,
<<<<<<< HEAD
	@Body() body: Partial<{ name: string; description: string }>,
  ) {
	return this.categoriesService.update(id, body);
=======
	@Body() dto: UpdateCategoryDto,
  ) {
	return this.categoriesService.update(id, dto);
>>>>>>> d599266 (use DTOs in controllers/services, add TrimPipe)
  }
 
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
	return this.categoriesService.remove(id);
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> d599266 (use DTOs in controllers/services, add TrimPipe)
