import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducerSqsModule } from 'src/producer-sqs/producer-sqs.module';
import { MessageProducer } from 'src/producer-sqs/producer-sqs.service';
import { MonitorController } from './monitor.controller';
import { MonitorEntity } from './monitor.entity';
import { MonitorService } from './monitor.service';

@Module({
  imports : [ProducerSqsModule, TypeOrmModule.forFeature([MonitorEntity])],
  controllers: [MonitorController],
  providers: [MonitorService, MessageProducer]
})
export class MonitorModule {}
