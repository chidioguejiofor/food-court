"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const brand_models_1 = require("../brands/brand.models");
class CategoryModel extends objection_1.Model {
}
exports.default = CategoryModel;
CategoryModel.tableName = 'categories';
CategoryModel.idColumn = 'id';
CategoryModel.relationMappings = {
    brand_id: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: brand_models_1.Brand,
        join: {
            from: 'addons.id',
            to: 'brands.id',
        }
    }
};
//# sourceMappingURL=table_category.model.js.map