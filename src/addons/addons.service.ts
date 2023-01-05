import { Injectable } from '@nestjs/common';
import { Addons } from './interfaces/addons.interface';

@Injectable()
export class AddonsService {
  private readonly addon: Addons[] = [
    {
      id: '135243534',
      name: 'Fried Rice',
      description: 'The best fried rice you can get',
      price: 500,
      category: 'Special Meal',
    },
    {
      id: '135243534',
      name: 'Fried Rice',
      description: 'The best fried rice you can get',
      price: 500,
      category: 'Special Meal',
    },
  ];

  findAll(): Addons[] {
    return this.addon;
  }

  findOne(id: string): Addons {
    return this.addon.find((addon) => addon.id === id);
  }
}
