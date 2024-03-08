import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// const corsConfig = {
//   origin: 'http://localhost:5173',
//   // methods: 'GET,POST',
// };

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors(corsConfig);
  // Apparently without additional config, GET from localhost:5173 works? :¬/
  // (Possibly because I'm fetching from localhost:8000 in the FE, rather
  // than 127.0.0.1?
  app.enableCors();
  await app.listen(8000);
}
bootstrap();
