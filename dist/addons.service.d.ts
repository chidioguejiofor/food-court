import { Addons } from './meal-management/src/addons/addons.interface';
import { Addon } from './meal-management/src/addons/addon.models';
export declare class AddonsService {
    findAll(): Promise<Addons[]>;
    findOne(id: string): Addons;
    create(data: any): Promise<Addon>;
}
