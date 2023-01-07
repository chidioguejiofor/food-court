import { Model, Column, Table, columnTypes } from 'nestjs-objection';

@Table({ tableName: 'addons' })
export class Addon extends Model {
  @Column({ type: columnTypes.increments })
  id: number;
  @Column({ type: columnTypes.string })
  name: string;
  @Column({ type: columnTypes.string })
  description: string;
  @Column({ type: columnTypes.number })
  price: number;
  @Column({ type: columnTypes.string })
  category: string;
  @Column({ type: columnTypes.string })
  brand_id: number;
  @Column({ type: columnTypes.string })
  role: string;
}
