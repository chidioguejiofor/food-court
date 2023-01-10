import { Model, ModelObject } from 'objection';
export default class UserModel extends Model {
    id: number;
    user_name: string;
    password: string;
    first_name: string;
    last_name: string;
    user_role: string;
    static tableName: string;
    static idColumn: string;
}
export type UserShape = ModelObject<UserModel>;
