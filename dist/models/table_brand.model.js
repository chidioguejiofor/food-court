"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const table_addon_model_1 = require("./table_addon.model");
const table_category_model_1 = require("./table_category.model");
class BrandModel extends objection_1.Model {
    static get relationMappings() {
        return {
            addons: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: table_addon_model_1.default,
                join: {
                    from: 'brands.id',
                    to: 'addons.brand_id',
                },
            },
            categories: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: table_category_model_1.default,
                join: {
                    from: 'brands.id',
                    to: 'categories.brand_id',
                },
            },
        };
    }
}
exports.default = BrandModel;
BrandModel.tableName = 'brands';
BrandModel.idColumn = 'id';
//# sourceMappingURL=table_brand.model.js.map