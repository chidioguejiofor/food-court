import { Injectable } from '@nestjs/common';
import { Addons } from './addons.interface';
import { InjectModel } from 'nestjs-objection/dist';
import { Addon } from './addon.models';

@Injectable()
export class AddonsService{

  async findAll(): Promise<Addons[]> {
    const addons = await Addon.query();
    return addons;
  }

  findOne(id: string): Addons {
    // return this.addon.find((addon) => addon.id === id);
    return {} as Addons;
  }

  async create(data: any) {
    const addon = await Addon.query().insert(data);
    return addon;
  }
}