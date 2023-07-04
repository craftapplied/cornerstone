import { IsEmail, MinLength } from 'class-validator';

export class SignUpDto {
  @IsEmail()
  email_address: string;

  @MinLength(10)
  password: string;
}
