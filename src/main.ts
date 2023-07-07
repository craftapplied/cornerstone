import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  console.log('STARTUP');
  console.log('STARTUP');
  console.log('STARTUP');
  console.log('STARTUP');
  console.log('STARTUP');
  console.log('STARTUP');
  console.log('STARTUP');
  console.log('STARTUP');

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}

bootstrap();
