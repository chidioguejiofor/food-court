import {
  Model,
  ModelObject,
  RelationMappings,
  RelationMappingsThunk,
  StringReturningMethod,
} from 'objection';
import AddonModel from './table_addon.model';
import CategoryModel from './table_category.model';

export default class BrandModel extends Model {
  id: number;
  brand_name: string;

  static tableName = 'brands'; // database table name
  static idColumn = 'id'; // id column name

  static get relationMappings(): RelationMappings | RelationMappingsThunk {
    return {
      addons: {
        relation: Model.HasManyRelation,
        modelClass: AddonModel,
        join: {
          from: 'brands.id',
          to: 'addons.brand_id',
        },
      },

      categories: {
        relation: Model.HasManyRelation,
        modelClass: CategoryModel,
        join: {
          from: 'brands.id',
          to: 'categories.brand_id',
        },
      },
    };
  }
}

export type BrandShape = ModelObject<BrandModel>;
