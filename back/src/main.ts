import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors(); // Allow every clients access to your database (need to config to a specific domain)
  app.enableCors({ origin: 'http://localhost:3000' }); // allow only client from localhost:3000 (react project) to access to database.
  await app.listen(3333);
}
bootstrap();
