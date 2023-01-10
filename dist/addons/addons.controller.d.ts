import { CreateAddonsDto } from './create-addons.dto';
import { AddonsService } from './addons.service';
import { Addons } from './addons.interface';
export declare class AddonsController {
    private readonly addonService;
    constructor(addonService: AddonsService);
    findAll(): Promise<Addons[]>;
    findOne(id: any): Addons;
    create(createAddonsDto: CreateAddonsDto): Promise<any>;
    update(updateAddonsDto: CreateAddonsDto, id: any): string;
    delete(id: any): string;
}
