import { Injectable } from '@nestjs/common';
import { Users } from 'src/users/users.interface';
import { User } from './user.models';

@Injectable()
export class UsersService {
  async findAll(): Promise<Users[]> {
    const users = await User.query();
    return users;
  }

  async findOne(email: string): Promise<User> {
    const user = await User.query().where('email', email).first();
    return user;
  }

  async create(data: any) {
    const user = await User.query().insert(data);
    return user;
  }
}
