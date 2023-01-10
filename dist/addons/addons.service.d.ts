import { Addons } from './addons.interface';
import { Addon } from './addon.models';
export declare class AddonsService {
    findAll(): Promise<Addons[]>;
    findOne(id: string): Addons;
    create(data: any): Promise<Addon>;
}
