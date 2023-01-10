import { Model } from 'nestjs-objection';
export declare class Category extends Model {
    id: number;
    name: string;
    brand_id: number;
}
