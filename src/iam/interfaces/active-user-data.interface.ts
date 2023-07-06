import { Role } from 'src/users/enums/role.enum';

export interface ActiveUserData {
  /**
   * The "subject" of the token. The value of this property
   * is the user ID that granted this token.
   */
  sub: string;

  /**
   * The subject's (user) email address.
   */
  email_address: string;

  /**
   * The subject's (user) role
   */
  role: Role;
}
