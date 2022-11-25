import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsumerModule } from './consumer/consumer.module';
import { MonitorModule } from './monitor/monitor.module';

@Module({
  imports: [ConsumerModule, MonitorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
