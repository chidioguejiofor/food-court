import { Model, ModelObject, StringReturningMethod } from 'objection';

export default class UserModel extends Model {
  id: number;
  user_name: string;
  password: string;
  first_name: string;
  last_name: string;
  user_role: string;

  static tableName = 'users'; // database table name
  static idColumn = 'id'; // id column name
}

export type UserShape = ModelObject<UserModel>;
