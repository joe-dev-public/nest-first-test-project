import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReleasesModule } from './releases/releases.module';
import { ItemsModule } from './items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Release } from './releases/entities/release.entity';

@Module({
  imports: [
    ReleasesModule,
    ItemsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres-server',
      // Doesn't seem necessary to specify the port, if using pg default:
      // port: 5432,
      username: 'nestjs',
      password: 'topsecret',
      database: 'nestjs_first_project',
      entities: [Release],
      // Don't use this in production!
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
