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
      host: this.configService.get<string>('DATABASE_HOST'),
      port: this.configService.get<number>('DATABASE_PORT'),
      username: this.configService.get<string>('DATABASE_USERNAME'),
      password: this.configService.get<string>('DATABASE_PASSWORD'),
      database: this.configService.get<string>('DATABASE_NAME'),

      autoLoadEntities: this.configService.get<boolean>('TYPEORM_AUTOLOAD'),
      synchronize: this.configService.get<boolean>('TYPEORM_SYNCHRONIZE'),
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
