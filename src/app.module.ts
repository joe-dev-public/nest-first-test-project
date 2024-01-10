import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReleasesModule } from './releases/releases.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [ReleasesModule, ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
