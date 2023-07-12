import { writeFileSync } from 'fs';
import { NestFactory, PartialGraphHost } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    snapshot: true,
    abortOnError: false,
  });

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}

bootstrap().catch((err) => {
  writeFileSync('graph.json', PartialGraphHost.toString() ?? '');
  process.exit(1);
});
