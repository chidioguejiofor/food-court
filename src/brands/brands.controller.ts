import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { CreateBrandsDto } from 'src/brands/create-brands.dto';
import { Brands } from 'src/brands/brands.interface';
import { BrandsService } from './brands.service';
import { Category } from 'src/categories/category.models';
import { Addon } from 'src/addons/addon.models';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandService: BrandsService) {}

  @Get()
  async findAll(): Promise<Brands[]> {
    return await this.brandService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Brands {
    return this.brandService.findOne(id);
  }

  @Post()
  async create(@Body() createBrandsDto: CreateBrandsDto) {
    return await this.brandService.create(createBrandsDto);
  }

  @Patch(':id')
  update(@Body() updateBrandDto: CreateBrandsDto, @Param('id') id): string {
    return `Item ${id} Updated Name: ${updateBrandDto.name}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return ` Item ${id} Deleted`;
  }

  @Get(':id/addons')
  async findAllAddons(@Param('id') id): Promise<any | string> {
    const addons = await this.brandService.findAllAddons(id);
    return addons;
  }

  @Get(':brandId/addons/:addonId')
  async findAddon(
    @Param('brandId') brandId,
    @Param('addonId') addonId,
  ): Promise<any | string> {
    const addons = await this.brandService.findAddon(brandId, addonId);
    return addons;
  }

  @Get(':id/addon-categories')
  async findAllAddonCategories(@Param('id') id): Promise<any> {
    const categories = await this.brandService.findAllAddonCategories(id);
    return categories;
  }

  @Post(':brandId/addon-categories')
  async createCategory(
    @Param('brandId') brandId: number,
    @Body() createCategory: Category,
  ) {
    createCategory.brand_id = brandId;
    return await this.brandService.createCategory(createCategory);
  }

  @Post(':brandId/addons')
  async createAddon(
    @Param('brandId') brandId: number,
    @Body() createAddon: Addon,
  ) {
    createAddon.brand_id = brandId;
    return await this.brandService.createAddon(createAddon);
  }

  @Patch(':brandId/addons/:addonId')
  async updateAddon(
    @Body() updateAddon: Addon,
    @Param('brandId') brandId,
    @Param('addonId') addonId,
  ): Promise<any> {
    return await this.brandService.updateAddon(brandId, addonId, updateAddon);
  }
  
  @Delete(':brandId/addons/:addonId')
  async deleteAddon(
    @Param('brandId') brandId,
    @Param('addonId') addonId,
  ): Promise<any> {
    return await this.brandService.deleteAddon(brandId, addonId);
  }
}
