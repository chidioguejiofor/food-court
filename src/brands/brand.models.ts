import {
  Model,
  Column,
  Table,
  columnTypes,
  Relation,
  relationTypes,
} from 'nestjs-objection';
import { Addon } from 'src/addons/addon.models';
import { Category } from 'src/categories/category.models';

@Table({ tableName: 'brands' })
export class Brand extends Model {
  @Column({ type: columnTypes.increments })
  id: number;
  @Column({ type: columnTypes.string })
  name: string;

  @Relation({
    modelClass: Addon,
    relation: relationTypes.HasManyRelation,
    join: {
      from: 'brands.id',
      to: 'addons.brand_id',
    },
  })
  addons: Addon[];

  @Relation({
    modelClass: Category,
    relation: relationTypes.HasManyRelation,
    join: {
      from: 'brands.id',
      to: 'categories.brand_id',
    },
  })
  categories: Category[];
}
