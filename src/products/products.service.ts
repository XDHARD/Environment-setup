import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
<<<<<<< HEAD
=======
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
>>>>>>> d599266 (use DTOs in controllers/services, add TrimPipe)
 
@Injectable()
export class ProductsService {
  constructor(
	@InjectRepository(Product)
	private readonly productRepo: Repository<Product>,
  ) {}
 
  async findAll(): Promise<Product[]> {
	return this.productRepo.find({
  	relations: ['category'],
	});
  }
 
  async findOne(id: number): Promise<Product> {
	const product = await this.productRepo.findOne({
  	where: { id },
  	relations: ['category'],
	});
	if (!product) {
  	throw new NotFoundException(
    	`Product #${id} not found`,
  	);
	}
	return product;
  }
 
<<<<<<< HEAD
  async create(data: {
	name: string;
	description?: string;
	price: number;
	stock?: number;
	categoryId?: number;
  }): Promise<Product> {
	const product = this.productRepo.create({
  	name: data.name,
  	description: data.description,
  	price: data.price,
  	stock: data.stock ?? 0,
  	category: data.categoryId ? { id: data.categoryId } : null,
	} as Product);
=======
  async create(dto: CreateProductDto): Promise<Product> {
	const product = this.productRepo.create({
  	name: dto.name,
  	description: dto.description,
  	price: dto.price,
  	stock: dto.stock ?? 0,
  	category: dto.categoryId
    	? { id: dto.categoryId } as any
    	: undefined,
	});
>>>>>>> d599266 (use DTOs in controllers/services, add TrimPipe)
	return this.productRepo.save(product);
  }
 
  async update(
	id: number,
<<<<<<< HEAD
	data: Partial<{
  	name: string;
  	description: string;
  	price: number;
  	stock: number;
  	isActive: boolean;
  	categoryId: number;
	}>,
  ): Promise<Product> {
	const product = await this.findOne(id);
	if (data.name !== undefined) product.name = data.name;
	if (data.description !== undefined)
  	product.description = data.description;
	if (data.price !== undefined) product.price = data.price;
	if (data.stock !== undefined) product.stock = data.stock;
	if (data.isActive !== undefined)
  	product.isActive = data.isActive;
	if (data.categoryId !== undefined) {
  	product.category = { id: data.categoryId } as any;
	}
=======
	dto: UpdateProductDto,
  ): Promise<Product> {
	const product = await this.findOne(id);
 
	if (dto.name !== undefined) product.name = dto.name;
	if (dto.description !== undefined)
  	product.description = dto.description;
	if (dto.price !== undefined) product.price = dto.price;
	if (dto.stock !== undefined) product.stock = dto.stock;
	if (dto.categoryId !== undefined) {
  	product.category = { id: dto.categoryId } as any;
	}
 
>>>>>>> d599266 (use DTOs in controllers/services, add TrimPipe)
	return this.productRepo.save(product);
  }
 
  async remove(id: number): Promise<void> {
	const product = await this.findOne(id);
	await this.productRepo.remove(product);
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> d599266 (use DTOs in controllers/services, add TrimPipe)
