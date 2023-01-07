import { Injectable } from '@nestjs/common';
import { Users } from 'src/users/users.interface';
import { InjectModel } from 'nestjs-objection/dist';
import { User } from './user.models';

@Injectable()
export class UsersService{

  async findAll(): Promise<Users[]> {
    const users = await User.query();
    return users;
  }

  findOne(id: string): Users {
    // return this.addon.find((addon) => addon.id === id);
    return {} as Users;
  }

  async create(data: any) {
    const addon = await User.query().insert(data);
    return addon;
  }
}


