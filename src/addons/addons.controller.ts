import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateAddonsDto } from './dto/create-addons.dto';
import { AddonsService } from './addons.service';
import { Addons } from './interfaces/addons.interface';

@Controller('addons')
export class AddonsController {
  constructor(private readonly addonService: AddonsService) {}

  @Get()
  findAll(): Addons[] {
    return this.addonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Addons {
    return this.addonService.findOne(id);
  }

  @Post()
  create(@Body() createAddonsDto: CreateAddonsDto): string {
    return `Created Item Name: ${createAddonsDto.name}`;
  }

  @Patch(':id')
  update(@Body() updateAddonsDto: CreateAddonsDto, @Param('id') id): string {
    return `Item ${id} Updated Name: ${updateAddonsDto.name}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return ` Item ${id} Deleted`;
  }
}
