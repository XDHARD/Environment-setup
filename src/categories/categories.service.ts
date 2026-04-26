import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
<<<<<<< HEAD
=======
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
>>>>>>> d599266 (use DTOs in controllers/services, add TrimPipe)
 
@Injectable()
export class CategoriesService {
  constructor(
	@InjectRepository(Category)
	private readonly categoryRepo: Repository<Category>,
  ) {}
 
  async findAll(): Promise<Category[]> {
	return this.categoryRepo.find();
  }
 
  async findOne(id: number): Promise<Category> {
	const category = await this.categoryRepo.findOne({
  	where: { id },
	});
	if (!category) {
<<<<<<< HEAD
  	throw new NotFoundException(`Category #${id} not found`);
=======
  	throw new NotFoundException(
    	`Category #${id} not found`,
  	);
>>>>>>> d599266 (use DTOs in controllers/services, add TrimPipe)
	}
	return category;
  }
 
<<<<<<< HEAD
  async create(data: Partial<Category>): Promise<Category> {
	const category = this.categoryRepo.create(data);
=======
  async create(dto: CreateCategoryDto): Promise<Category> {
	const category = this.categoryRepo.create(dto);
>>>>>>> d599266 (use DTOs in controllers/services, add TrimPipe)
	return this.categoryRepo.save(category);
  }
 
  async update(
	id: number,
<<<<<<< HEAD
	data: Partial<Category>,
  ): Promise<Category> {
	const category = await this.findOne(id);
	Object.assign(category, data);
=======
	dto: UpdateCategoryDto,
  ): Promise<Category> {
	const category = await this.findOne(id);
	Object.assign(category, dto);
>>>>>>> d599266 (use DTOs in controllers/services, add TrimPipe)
	return this.categoryRepo.save(category);
  }
 
  async remove(id: number): Promise<void> {
	const category = await this.findOne(id);
	await this.categoryRepo.remove(category);
  }
}
