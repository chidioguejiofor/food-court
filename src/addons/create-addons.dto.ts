import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateAddonsDto {
  readonly id: number;

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsString()
  readonly description?: string;

  @IsNumber()
  readonly price: number;

  brand_id: number;
}
