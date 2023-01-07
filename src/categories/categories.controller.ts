import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { CreatecategoriesDto } from 'src/categories/create-categories.dto';
import { Category } from './category.models';
import { CategoriesService } from './categories.service';

@Controller('addon-categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoriesService) {}

  @Get()
  async findAll(): Promise<Category[]> {
    return await this.categoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Category> {
    return await this.categoryService.findOne(id);
  }

  @Post()
  async create(@Body() createCategoriesDto: CreatecategoriesDto) {
    return await this.categoryService.create(createCategoriesDto);
  }

  @Patch(':id')
  update(
    @Body() updateCategoryDto: CreatecategoriesDto,
    @Param('id') id,
  ): string {
    return `Item ${id} Updated Name: ${updateCategoryDto.name}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return ` Item ${id} Deleted`;
  }
}
