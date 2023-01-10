import { CreateBrandsDto } from 'src/brands/create-brands.dto';
import { Brands } from 'src/brands/brands.interface';
import { BrandsService } from './brands.service';
import { Addon } from 'src/addons/addon.models';
import { CreatecategoriesDto } from 'src/categories/create-categories.dto';
import { CreateAddonsDto } from 'src/addons/create-addons.dto';
import { Brand } from './brand.models';
import { Category } from 'src/categories/category.models';
export declare class BrandsController {
    private readonly brandService;
    constructor(brandService: BrandsService);
    findAll(): Promise<Brands[]>;
    findOne(id: any): Promise<Brands>;
    create(createBrandsDto: CreateBrandsDto): Promise<Brand | {
        msg: string;
    }>;
    update(updateBrandDto: CreateBrandsDto, id: any): string;
    delete(id: any): string;
    findAllAddons(id: any): Promise<any | string>;
    findAddon(brandId: any, addonId: any): Promise<any | string>;
    findAllAddonCategories(id: any): Promise<any>;
    createCategory(brandId: number, createCategory: CreatecategoriesDto): Promise<Category | {
        msg: string;
    }>;
    createAddon(brandId: number, createAddon: CreateAddonsDto): Promise<Addon | {
        msg: string;
    }>;
    updateAddon(updateAddon: object, brandId: any, addonId: any): Promise<any>;
    deleteAddon(brandId: any, addonId: any): Promise<any>;
}
