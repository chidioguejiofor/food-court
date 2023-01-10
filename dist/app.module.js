"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const dist_1 = require("nestjs-objection/dist");
const addon_models_1 = require("./addons/addon.models");
const users_controller_1 = require("./users/users.controller");
const brands_controller_1 = require("./brands/brands.controller");
const brands_service_1 = require("./brands/brands.service");
const users_service_1 = require("./users/users.service");
const auth_service_1 = require("./auth/auth.service");
const jwt_1 = require("@nestjs/jwt");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const dotenv = require("dotenv");
dotenv.config();
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            dist_1.ObjectionModule.forRoot({
                config: {
                    client: 'pg',
                    version: '5.7',
                    useNullAsDefault: true,
                    connection: {
                        host: process.env.PG_HOST,
                        user: process.env.PG_USER,
                        password: process.env.PG_PASS,
                        database: process.env.PG_DB,
                    },
                },
            }),
            dist_1.ObjectionModule.forFeature([addon_models_1.Addon]),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
        ],
        controllers: [app_controller_1.AppController, users_controller_1.UserController, brands_controller_1.BrandsController],
        providers: [app_service_1.AppService, brands_service_1.BrandsService, users_service_1.UsersService, auth_service_1.AuthService, jwt_1.JwtService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map