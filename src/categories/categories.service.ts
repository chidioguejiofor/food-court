import { Injectable } from '@nestjs/common';
import { Category } from './category.models';

@Injectable()
export class CategoriesService {
  async findAll(): Promise<Category[]> {
    const categories = await Category.query();
    return categories;
  }

  async findOne(id: number): Promise<Category> {
    return await Category.query().findById(id);
  }

  async update(id: number, data: any): Promise<Category | any> {
    const addon = await Category.query().findById(id);
    if (!addon) {
      return 'Addon not found';
    }

    return await Category.query().patch(data);
  }

  async create(data: any) {
    const addon = await Category.query().insert(data);
    return addon;
  }
}
