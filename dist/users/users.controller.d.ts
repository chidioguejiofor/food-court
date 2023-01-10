import { User } from './user.models';
import { CreateUsersDto } from 'src/users/create-users.dto';
import { Users } from 'src/users/users.interface';
import { UsersService } from './users.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UsersService);
    findAll(): Promise<Users[]>;
    findOne(userId: any): Promise<Users>;
    create(createCategoriesDto: CreateUsersDto): Promise<User | {
        msg: string;
    }>;
    update(updateUserDto: CreateUsersDto, id: any): string;
    delete(id: any): string;
}
