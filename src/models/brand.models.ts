import { Model, Column, Table, columnTypes } from 'nestjs-objection';

@Table({ tableName: 'brands' })
export class Brand extends Model {
  @Column({ type: columnTypes.increments })
  id: number;
  @Column({ type: columnTypes.string })
  brand_name: string;
}
