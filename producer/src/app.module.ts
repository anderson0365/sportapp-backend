import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonitorModule } from './monitor/monitor.module';
import { ProducerSqsModule } from './producer-sqs/producer-sqs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MonitorEntity } from './monitor/monitor.entity';

@Module({
  imports: [MonitorModule, ProducerSqsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTRES_HOST ||'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [
        MonitorEntity
      ],
      synchronize : true,
      dropSchema: true,
      keepConnectionAlive: true,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
