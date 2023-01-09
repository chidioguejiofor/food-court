import { Injectable } from '@nestjs/common';
import { Brands } from 'src/brands/brands.interface';
import { Brand } from './brand.models';
import { Category } from 'src/categories/category.models';
import { Addon } from 'src/addons/addon.models';

@Injectable()
export class BrandsService {
  async findAll(): Promise<Brands[]> {
    const brands = await Brand.query();
    return brands;
  }

  async findOne(brandId: string): Promise<Brands> {
    const brand = await Brand.query().findById(brandId);
    return brand;
  }

  async create(data: any) {
    const addon = await Brand.query().insert(data);
    return addon;
  }

  async findAllAddons(brandId: number) {
    const brand = await Brand.query()
      .withGraphFetched('addons')
      .findById(brandId);
    if (!brand) {
      return { msg: 'Brand Not Found' };
    }
    return brand.addons;
  }

  async findAddon(brandId: number, addonId: number) {
    const brand = await Brand.query().findById(brandId);
    if (!brand) {
      return { msg: 'Brand Not Found' };
    }
    const addon = await Addon.query()
      .where('brand_id', brand.id)
      .where('id', addonId);
    if (addon.length < 1) {
      return { msg: 'Addon Not Found' };
    }
    return addon[0];
  }

  async findAllAddonCategories(brandId: number) {
    const brand = await Brand.query()
      .withGraphFetched('categories')
      .findById(brandId);
    if (!brand) {
      return { msg: 'Brand Not Found' };
    }
    return brand.categories;
  }

  async createCategory(data: any) {
    const category = await Category.query().insert(data);
    return category;
  }

  async createAddon(data: any) {
    const addon = await Addon.query().insert(data);
    return addon;
  }

  async updateAddon(brandId: number, addonId: number, data: any) {
    const brand = await Brand.query().findById(brandId);
    if (!brand) {
      return { msg: 'Brand Not Found' };
    }
    const addon = await Addon.query()
      .where('brand_id', brand.id)
      .where('id', addonId);
    if (addon.length < 1) {
      return { msg: 'Addon Not Found' };
    }
    await Addon.query().patch(data);
    return addon;
  }

  async deleteAddon(brandId: number, addonId: number) {
    const brand = await Brand.query().findById(brandId);
    if (!brand) {
      return { msg: 'Brand Not Found' };
    }
    const addon = await Addon.query()
      .where('brand_id', brand.id)
      .where('id', addonId);
    if (addon.length < 1) {
      return { msg: 'Addon Not Found' };
    }
    await Addon.query().deleteById(addonId);

    return { msg: `${addon[0].name} was Successfully Deleted` };
  }
}
