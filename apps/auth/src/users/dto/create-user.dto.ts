import { IsEmail, IsStrongPassword, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsStrongPassword()
  @MinLength(8)
  password: string;
}
