"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandsService = void 0;
const common_1 = require("@nestjs/common");
const brand_models_1 = require("./brand.models");
const category_models_1 = require("../categories/category.models");
const addon_models_1 = require("../addons/addon.models");
let BrandsService = class BrandsService {
    async findAll() {
        const brands = await brand_models_1.Brand.query();
        return brands;
    }
    async findOne(brandId) {
        const brand = await brand_models_1.Brand.query().findById(brandId);
        return brand;
    }
    async create(data) {
        const addon = await brand_models_1.Brand.query().insert(data);
        return addon;
    }
    async findAllAddons(brandId) {
        const brand = await brand_models_1.Brand.query()
            .withGraphFetched('addons')
            .findById(brandId);
        if (!brand) {
            return { msg: 'Brand Not Found' };
        }
        return brand.addons;
    }
    async findAddon(brandId, addonId) {
        const brand = await brand_models_1.Brand.query().findById(brandId);
        if (!brand) {
            return { msg: 'Brand Not Found' };
        }
        const addon = await addon_models_1.Addon.query()
            .where('brand_id', brand.id)
            .where('id', addonId);
        if (addon.length < 1) {
            return { msg: 'Addon Not Found' };
        }
        return addon[0];
    }
    async findAllAddonCategories(brandId) {
        const brand = await brand_models_1.Brand.query()
            .withGraphFetched('categories')
            .findById(brandId);
        if (!brand) {
            return { msg: 'Brand Not Found' };
        }
        return brand.categories;
    }
    async createCategory(data) {
        const category = await category_models_1.Category.query().insert(data);
        return category;
    }
    async createAddon(data) {
        const addon = await addon_models_1.Addon.query().insert(data);
        return addon;
    }
    async updateAddon(brandId, addonId, data) {
        const brand = await brand_models_1.Brand.query().findById(brandId);
        if (!brand) {
            return { msg: 'Brand Not Found' };
        }
        const addon = await addon_models_1.Addon.query()
            .where('brand_id', brand.id)
            .where('id', addonId);
        if (addon.length < 1) {
            return { msg: 'Addon Not Found' };
        }
        await addon_models_1.Addon.query().patch(data);
        return addon;
    }
    async deleteAddon(brandId, addonId) {
        const brand = await brand_models_1.Brand.query().findById(brandId);
        if (!brand) {
            return { msg: 'Brand Not Found' };
        }
        const addon = await addon_models_1.Addon.query()
            .where('brand_id', brand.id)
            .where('id', addonId);
        if (addon.length < 1) {
            return { msg: 'Addon Not Found' };
        }
        await addon_models_1.Addon.query().deleteById(addonId);
        return { msg: `${addon[0].name} was Successfully Deleted` };
    }
};
BrandsService = __decorate([
    (0, common_1.Injectable)()
], BrandsService);
exports.BrandsService = BrandsService;
//# sourceMappingURL=brands.service.js.map