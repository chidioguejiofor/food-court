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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddonsController = void 0;
const common_1 = require("@nestjs/common");
const create_addons_dto_1 = require("./create-addons.dto");
const addons_service_1 = require("./addons.service");
let AddonsController = class AddonsController {
    constructor(addonService) {
        this.addonService = addonService;
    }
    async findAll() {
        return await this.addonService.findAll();
    }
    findOne(id) {
        return this.addonService.findOne(id);
    }
    async create(createAddonsDto) {
        return await this.addonService.create(createAddonsDto);
    }
    update(updateAddonsDto, id) {
        return `Item ${id} Updated Name: ${updateAddonsDto.name}`;
    }
    delete(id) {
        return ` Item ${id} Deleted`;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AddonsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AddonsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_addons_dto_1.CreateAddonsDto]),
    __metadata("design:returntype", Promise)
], AddonsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_addons_dto_1.CreateAddonsDto, Object]),
    __metadata("design:returntype", String)
], AddonsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AddonsController.prototype, "delete", null);
AddonsController = __decorate([
    (0, common_1.Controller)('addons'),
    __metadata("design:paramtypes", [typeof (_a = typeof addons_service_1.AddonsService !== "undefined" && addons_service_1.AddonsService) === "function" ? _a : Object])
], AddonsController);
exports.AddonsController = AddonsController;
//# sourceMappingURL=addons.controller.js.map