import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUsersDto {
  readonly id: number;

  @IsNotEmpty()
  @IsString()
  readonly first_name: string;

  @IsNotEmpty()
  @IsString()
  readonly last_name: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  readonly email: string;

  readonly role: string;
}
