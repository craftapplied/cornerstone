import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../enums/role.enum';

@Entity()
export class User {
  // Entity
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // Account
  @Column('varchar', { unique: true, length: 255 })
  email_address: string;

  @Column({ nullable: true, length: 255 })
  password: string;

  @Column({ default: false })
  email_verified: boolean;

  @Column({ enum: Role, default: Role.Standard })
  role: Role;
}
