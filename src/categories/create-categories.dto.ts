import { IsNotEmpty, IsString } from 'class-validator';

export class CreatecategoriesDto {
  readonly id: number;

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  brand_id: number;
}
