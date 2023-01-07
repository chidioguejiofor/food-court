import { Model, ModelObject, StringReturningMethod } from 'objection';
import { Brand } from 'src/brands/brand.models';

export default class CategoryModel extends Model {
  id: number;
  category_name: string;

  static tableName = 'categories'; // database table name
  static idColumn = 'id'; // id column name

  static relationMappings = {
    brand_id: {
      relation: Model.BelongsToOneRelation,
      modelClass: Brand,
      join: {
        from: 'addons.id',
        to: 'brands.id',
      }
    }
  };
}

export type CategoryShape = ModelObject<CategoryModel>;