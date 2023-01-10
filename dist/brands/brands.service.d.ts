import { Brands } from 'src/brands/brands.interface';
import { Brand } from './brand.models';
import { Category } from 'src/categories/category.models';
import { Addon } from 'src/addons/addon.models';
export declare class BrandsService {
    findAll(): Promise<Brands[]>;
    findOne(brandId: string): Promise<Brands>;
    create(data: any): Promise<Brand>;
    findAllAddons(brandId: number): Promise<Addon[] | {
        msg: string;
    }>;
    findAddon(brandId: number, addonId: number): Promise<Addon | {
        msg: string;
    }>;
    findAllAddonCategories(brandId: number): Promise<Category[] | {
        msg: string;
    }>;
    createCategory(data: any): Promise<Category>;
    createAddon(data: any): Promise<Addon>;
    updateAddon(brandId: number, addonId: number, data: any): Promise<Addon[] | {
        msg: string;
    }>;
    deleteAddon(brandId: number, addonId: number): Promise<{
        msg: string;
    }>;
}
