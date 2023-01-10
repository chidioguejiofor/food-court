"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const brand_models_1 = require("../brands/brand.models");
class AddonModel extends objection_1.Model {
}
exports.default = AddonModel;
AddonModel.tableName = 'addons';
AddonModel.idColumn = 'id';
AddonModel.relationMappings = {
    brand_id: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: brand_models_1.Brand,
        join: {
            from: 'addons.brand_id',
            to: 'brands.id',
        }
    }
};
//# sourceMappingURL=table_addon.model.js.map