import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReleasesModule } from './releases/releases.module';

@Module({
  imports: [ReleasesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
