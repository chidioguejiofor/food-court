import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { CreateUsersDto } from 'src/users/create-users.dto';
import { Users } from 'src/users/users.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly categoryService: UsersService) {}

  @Get()
  async findAll(): Promise<Users[]> {
    return await this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Users {
    return this.categoryService.findOne(id);
  }

  @Post()
  async create(@Body() createCategoriesDto: CreateUsersDto) {
    return await this.categoryService.create(createCategoriesDto);
  }

  @Patch(':id')
  update(@Body() updateUserDto: CreateUsersDto, @Param('id') id): string {
    return `Item ${id} Updated Name: ${updateUserDto.first_name}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return ` Item ${id} Deleted`;
  }
}
