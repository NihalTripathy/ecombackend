import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './logger.middleware';

async function nihak() {
  const app = await NestFactory.create(AppModule);
  app.use(logger);
  await app.listen(3000);
}
nihak();
