import { Model, Column, Table, columnTypes } from 'nestjs-objection';

@Table({ tableName: 'users' })
export class User extends Model {
  @Column({ type: columnTypes.increments })
  id: number;
  @Column({ type: columnTypes.string })
  user_name: string;
  @Column({ type: columnTypes.string })
  first_name: string;
  @Column({ type: columnTypes.string })
  last_name: string;
  @Column({ type: columnTypes.string })
  password: string;
  @Column({ type: columnTypes.string })
  email: string;
  @Column({ type: columnTypes.string })
  role: string;
}
