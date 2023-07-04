import { IsEmail, MinLength } from 'class-validator';

export class SignInDto {
  @IsEmail()
  email_address: string;

  @MinLength(10)
  password: string;
}
