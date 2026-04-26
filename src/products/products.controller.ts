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
import { ProductsService } from './products.service';
<<<<<<< HEAD
=======
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
>>>>>>> d599266 (use DTOs in controllers/services, add TrimPipe)
 
@Controller('api/products')
export class ProductsController {
  constructor(
	private readonly productsService: ProductsService,
  ) {}
 
  @Get()
  findAll() {
	return this.productsService.findAll();
  }
 
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
	return this.productsService.findOne(id);
  }
 
  @Post()
<<<<<<< HEAD
  create(
	@Body()
	body: {
  	name: string;
  	description?: string;
  	price: number;
  	stock?: number;
  	categoryId?: number;
	},
  ) {
	return this.productsService.create(body);
=======
  create(@Body() dto: CreateProductDto) {
	return this.productsService.create(dto);
>>>>>>> d599266 (use DTOs in controllers/services, add TrimPipe)
  }
 
  @Patch(':id')
  update(
	@Param('id', ParseIntPipe) id: number,
<<<<<<< HEAD
	@Body() body: any,
  ) {
	return this.productsService.update(id, body);
=======
	@Body() dto: UpdateProductDto,
  ) {
	return this.productsService.update(id, dto);
>>>>>>> d599266 (use DTOs in controllers/services, add TrimPipe)
  }
 
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
	return this.productsService.remove(id);
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> d599266 (use DTOs in controllers/services, add TrimPipe)
