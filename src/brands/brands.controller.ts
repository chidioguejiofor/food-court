import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';

import { CreateBrandsDto } from 'src/brands/create-brands.dto';
import { Brands } from 'src/brands/brands.interface';
import { BrandsService } from './brands.service';
import { Addon } from 'src/addons/addon.models';
import { CreatecategoriesDto } from 'src/categories/create-categories.dto';
import { CreateAddonsDto } from 'src/addons/create-addons.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/users/roles.decorator';
import { Role } from 'src/users/role.enum';
import { Brand } from './brand.models';
import { Category } from 'src/categories/category.models';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandService: BrandsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<Brands[]> {
    return await this.brandService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id): Promise<Brands> {
    return this.brandService.findOne(id);
  }

  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createBrandsDto: CreateBrandsDto) {
    const user = await Brand.query()
      .where('name', createBrandsDto.name)
      .first();
    if (user) {
      return { msg: 'Brand Already Exist' };
    }
    return await this.brandService.create(createBrandsDto);
  }

  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Body() updateBrandDto: CreateBrandsDto, @Param('id') id): string {
    return `Item ${id} Updated Name: ${updateBrandDto.name}`;
  }

  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id): string {
    return ` Item ${id} Deleted`;
  }

  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Get(':id/addons')
  async findAllAddons(@Param('id') id): Promise<any | string> {
    const addons = await this.brandService.findAllAddons(id);
    return addons;
  }

  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Get(':brandId/addons/:addonId')
  async findAddon(
    @Param('brandId') brandId,
    @Param('addonId') addonId,
  ): Promise<any | string> {
    const addons = await this.brandService.findAddon(brandId, addonId);
    return addons;
  }

  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Get(':id/addon-categories')
  async findAllAddonCategories(@Param('id') id): Promise<any> {
    const categories = await this.brandService.findAllAddonCategories(id);
    return categories;
  }

  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Post(':brandId/addon-categories')
  async createCategory(
    @Param('brandId') brandId: number,
    @Body() createCategory: CreatecategoriesDto,
  ) {
    const category = await Category.query()
      .where('name', createCategory.name)
      .where('brand_id', brandId)
      .first();
    if (category) {
      return { msg: 'Addon Category Already Exist' };
    }
    createCategory.brand_id = brandId;
    return await this.brandService.createCategory(createCategory);
  }

  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Post(':brandId/addons')
  async createAddon(
    @Param('brandId') brandId: number,
    @Body() createAddon: CreateAddonsDto,
  ) {
    const addon = await Addon.query()
      .where('name', createAddon.name)
      .where('brand_id', brandId)
      .first();
    if (addon) {
      return { msg: 'Addon Already Exist' };
    }
    createAddon.brand_id = brandId;
    return await this.brandService.createAddon(createAddon);
  }

  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Patch(':brandId/addons/:addonId')
  async updateAddon(
    @Body() updateAddon: object,
    @Param('brandId') brandId,
    @Param('addonId') addonId,
  ): Promise<any> {
    return await this.brandService.updateAddon(brandId, addonId, updateAddon);
  }

  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Delete(':brandId/addons/:addonId')
  async deleteAddon(
    @Param('brandId') brandId,
    @Param('addonId') addonId,
  ): Promise<any> {
    return await this.brandService.deleteAddon(brandId, addonId);
  }
}
