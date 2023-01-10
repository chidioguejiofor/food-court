import { Model, ModelObject, RelationMappings, RelationMappingsThunk } from 'objection';
export default class BrandModel extends Model {
    id: number;
    brand_name: string;
    static tableName: string;
    static idColumn: string;
    static get relationMappings(): RelationMappings | RelationMappingsThunk;
}
export type BrandShape = ModelObject<BrandModel>;
