import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsString()
  @IsNotEmpty()
  hobby: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(['INTERN', 'ADMIN', 'ENGINEER'], { message: 'Valid role required' })
  role: 'INTERN' | 'ADMIN' | 'ENGINEER';
}
