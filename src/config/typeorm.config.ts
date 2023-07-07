import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

export type ExtendedTypeOrmModuleOptions = TypeOrmModuleOptions & {
  synchronize: boolean;
  logging: boolean;
  cli: {
    migrationsDir: string;
  };
};

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): ExtendedTypeOrmModuleOptions {
    return {
      type: 'postgres' as 'postgres',
      // host: String(process.env.DATABASE_HOST),
      host: this.configService.get<string>('DATABASE_HOST'),
      // port: Number(process.env.DATABASE_PORT),
      port: this.configService.get<number>('DATABASE_PORT'),
      // username: String(process.env.DATABASE_USERNAME),
      username: this.configService.get<string>('DATABASE_USERNAME'),
      // password: String(process.env.DATABASE_PASSWORD),
      password: this.configService.get<string>('DATABASE_PASSWORD'),
      // database: String(process.env.DATABASE_NAME),
      database: this.configService.get<string>('DATABASE_NAME'),

      // autoLoadEntities: Boolean(process.env.TYPEORM_AUTOLOAD),
      // autoLoadEntities: true,
      autoLoadEntities: this.configService.get<boolean>('TYPEORM_AUTOLOAD'),
      // synchronize: Boolean(process.env.TYPEORM_SYNCHRONIZE),
      // synchronize: true,
      synchronize: this.configService.get<boolean>('TYPEORM_SYNCHRONIZE'),
      // logging: Boolean(process.env.TYPEORM_LOGGING),
      // logging: false,
      logging: this.configService.get<boolean>('TYPEORM_LOGGING'),

      entities: ['dist/users/entities/*.entity.js'],
      subscribers: [],
      migrations: ['dist/migrations/**/*.js'],
      cli: {
        migrationsDir: __dirname + '/../database/migrations',
      },
      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
    };
  }
}
