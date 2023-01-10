import { Model } from 'nestjs-objection';
import { Addon } from 'src/addons/addon.models';
import { Category } from 'src/categories/category.models';
export declare class Brand extends Model {
    id: number;
    name: string;
    addons: Addon[];
    categories: Category[];
}
