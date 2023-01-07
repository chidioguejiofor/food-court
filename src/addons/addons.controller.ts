import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateAddonsDto } from './create-addons.dto';
import { AddonsService } from './addons.service';
import { Addons } from './addons.interface';
import {
  InjectModel,
  synchronize,
  InjectConnection,
  Connection,
} from 'nestjs-objection/dist';

@Controller('addons')
export class AddonsController {
  constructor(private readonly addonService: AddonsService) {}

  @Get()
  async findAll(): Promise<Addons[]> {
    return await this.addonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Addons {
    return this.addonService.findOne(id);
  }

  @Post()
  async create(@Body() createAddonsDto: CreateAddonsDto) {
    return await this.addonService.create(createAddonsDto);
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
