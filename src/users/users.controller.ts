import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from './user.models';

import { CreateUsersDto } from 'src/users/create-users.dto';
import { Users } from 'src/users/users.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async findAll(): Promise<Users[]> {
    return await this.userService.findAll();
  }

  @Get(':userId')
  findOne(@Param('userId') userId): Promise<Users> {
    return this.userService.findOne(userId);
  }

  @Post()
  async create(@Body() createCategoriesDto: CreateUsersDto) {
    const user = await User.query()
      .where('email', createCategoriesDto.email)
      .first();
    if (user) {
      return { msg: 'User Already Exist' };
    }
    const salt = 10;
    const hashedPassword = await bcrypt.hash(
      createCategoriesDto.password,
      salt,
    );
    createCategoriesDto.password = hashedPassword;
    return await this.userService.create(createCategoriesDto);
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
