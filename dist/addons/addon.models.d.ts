import { Model } from 'nestjs-objection';
export declare class Addon extends Model {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    brand_id: number;
    role: string;
}
