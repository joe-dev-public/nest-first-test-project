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
  // Todo: use configs so we can have 8000 for dev and 80 for deploy? (Or
  // moot if we use Docker for dev, in which case just leave set to 80?)
  await app.listen(80);
}
bootstrap();
