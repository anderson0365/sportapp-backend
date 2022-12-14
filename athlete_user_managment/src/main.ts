import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'sv-athlete/api/v',
    defaultVersion: '1',
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
