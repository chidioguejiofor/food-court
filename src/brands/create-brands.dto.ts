import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBrandsDto {
  readonly id: number;

  @IsNotEmpty()
  @IsString()
  name: string;
}
