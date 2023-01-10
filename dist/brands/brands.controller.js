"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandsController = void 0;
const common_1 = require("@nestjs/common");
const create_brands_dto_1 = require("./create-brands.dto");
const brands_service_1 = require("./brands.service");
const addon_models_1 = require("../addons/addon.models");
const create_categories_dto_1 = require("../categories/create-categories.dto");
const create_addons_dto_1 = require("../addons/create-addons.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_decorator_1 = require("../users/roles.decorator");
const role_enum_1 = require("../users/role.enum");
const brand_models_1 = require("./brand.models");
const category_models_1 = require("../categories/category.models");
let BrandsController = class BrandsController {
    constructor(brandService) {
        this.brandService = brandService;
    }
    async findAll() {
        return await this.brandService.findAll();
    }
    findOne(id) {
        return this.brandService.findOne(id);
    }
    async create(createBrandsDto) {
        const user = await brand_models_1.Brand.query()
            .where('name', createBrandsDto.name)
            .first();
        if (user) {
            return { msg: 'Brand Already Exist' };
        }
        return await this.brandService.create(createBrandsDto);
    }
    update(updateBrandDto, id) {
        return `Item ${id} Updated Name: ${updateBrandDto.name}`;
    }
    delete(id) {
        return ` Item ${id} Deleted`;
    }
    async findAllAddons(id) {
        const addons = await this.brandService.findAllAddons(id);
        return addons;
    }
    async findAddon(brandId, addonId) {
        const addons = await this.brandService.findAddon(brandId, addonId);
        return addons;
    }
    async findAllAddonCategories(id) {
        const categories = await this.brandService.findAllAddonCategories(id);
        return categories;
    }
    async createCategory(brandId, createCategory) {
        const category = await category_models_1.Category.query()
            .where('name', createCategory.name)
            .where('brand_id', brandId)
            .first();
        if (category) {
            return { msg: 'Addon Category Already Exist' };
        }
        createCategory.brand_id = brandId;
        return await this.brandService.createCategory(createCategory);
    }
    async createAddon(brandId, createAddon) {
        const addon = await addon_models_1.Addon.query()
            .where('name', createAddon.name)
            .where('brand_id', brandId)
            .first();
        if (addon) {
            return { msg: 'Addon Already Exist' };
        }
        createAddon.brand_id = brandId;
        return await this.brandService.createAddon(createAddon);
    }
    async updateAddon(updateAddon, brandId, addonId) {
        return await this.brandService.updateAddon(brandId, addonId, updateAddon);
    }
    async deleteAddon(brandId, addonId) {
        return await this.brandService.deleteAddon(brandId, addonId);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BrandsController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BrandsController.prototype, "findOne", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_brands_dto_1.CreateBrandsDto]),
    __metadata("design:returntype", Promise)
], BrandsController.prototype, "create", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_brands_dto_1.CreateBrandsDto, Object]),
    __metadata("design:returntype", String)
], BrandsController.prototype, "update", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], BrandsController.prototype, "delete", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id/addons'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BrandsController.prototype, "findAllAddons", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':brandId/addons/:addonId'),
    __param(0, (0, common_1.Param)('brandId')),
    __param(1, (0, common_1.Param)('addonId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BrandsController.prototype, "findAddon", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id/addon-categories'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BrandsController.prototype, "findAllAddonCategories", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(':brandId/addon-categories'),
    __param(0, (0, common_1.Param)('brandId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_categories_dto_1.CreatecategoriesDto]),
    __metadata("design:returntype", Promise)
], BrandsController.prototype, "createCategory", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(':brandId/addons'),
    __param(0, (0, common_1.Param)('brandId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_addons_dto_1.CreateAddonsDto]),
    __metadata("design:returntype", Promise)
], BrandsController.prototype, "createAddon", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(':brandId/addons/:addonId'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('brandId')),
    __param(2, (0, common_1.Param)('addonId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], BrandsController.prototype, "updateAddon", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':brandId/addons/:addonId'),
    __param(0, (0, common_1.Param)('brandId')),
    __param(1, (0, common_1.Param)('addonId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BrandsController.prototype, "deleteAddon", null);
BrandsController = __decorate([
    (0, common_1.Controller)('brands'),
    __metadata("design:paramtypes", [brands_service_1.BrandsService])
], BrandsController);
exports.BrandsController = BrandsController;
//# sourceMappingURL=brands.controller.js.map