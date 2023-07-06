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
  createTypeOrmOptions(): ExtendedTypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: String(process.env.DATABASE_HOST),
      port: Number(process.env.DATABASE_PORT),
      username: String(process.env.DATABASE_USERNAME),
      password: String(process.env.DATABASE_PASSWORD),
      database: String(process.env.DATABASE_NAME),

      // autoLoadEntities: Boolean(process.env.TYPEORM_AUTOLOAD),
      autoLoadEntities: true,
      // synchronize: Boolean(process.env.TYPEORM_SYNCHRONIZE),
      synchronize: true,
      // logging: Boolean(process.env.TYPEORM_LOGGING),
      logging: false,

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
