import { Users } from 'src/users/users.interface';
import { User } from './user.models';
export declare class UsersService {
    findAll(): Promise<Users[]>;
    findOne(email: string): Promise<User>;
    create(data: any): Promise<User>;
}
