import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'sv-producer/api/v',
    defaultVersion: '1',
  });
  await app.listen(process.env.PORT || 3004);
}
bootstrap();
