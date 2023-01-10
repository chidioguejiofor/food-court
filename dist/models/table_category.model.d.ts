import { Model, ModelObject } from 'objection';
import { Brand } from 'src/brands/brand.models';
export default class CategoryModel extends Model {
    id: number;
    category_name: string;
    static tableName: string;
    static idColumn: string;
    static relationMappings: {
        brand_id: {
            relation: import("objection").RelationType;
            modelClass: typeof Brand;
            join: {
                from: string;
                to: string;
            };
        };
    };
}
export type CategoryShape = ModelObject<CategoryModel>;
