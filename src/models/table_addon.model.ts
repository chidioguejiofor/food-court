import { Model, ModelObject, StringReturningMethod } from 'objection';
import { Brand } from 'src/brands/brand.models';

export default class AddonModel extends Model {
  id: number;
  name: string;
  description?: string;
  price: number;
  category?: string;

  static tableName = 'addons'; // database table name
  static idColumn = 'id'; // id column name

  static relationMappings = {
    brand_id: {
      relation: Model.BelongsToOneRelation,
      modelClass: Brand,
      join: {
        from: 'addons.brand_id',
        to: 'brands.id',
      }
    }
  };
}

export type AddonShape = ModelObject<AddonModel>;