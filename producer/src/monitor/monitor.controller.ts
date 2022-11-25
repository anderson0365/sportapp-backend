import { Body, Controller, Post, UseInterceptors, Headers } from '@nestjs/common';
import { MessageProducer } from 'src/producer-sqs/producer-sqs.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { MonitorDto } from './dtos/monitor.dto';
import { MonitorService } from './monitor.service';

@Controller('monitor')
@UseInterceptors(BusinessErrorsInterceptor)
export class MonitorController {

    sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    constructor(
        private readonly producerService: MessageProducer,
        private readonly monitorService : MonitorService
      ) {}

    @Post()
    async monitor(@Headers() headers: Record<string, string>, @Body() data: MonitorDto) {
        this.producerService.sendMessage(data);
    }

    @Post('start')
    async start(@Headers() headers: Record<string, string>) {
        await this.monitorService.start();
        this.monitoring();
        return {};
    }

    @Post('stop')
    async stop(@Headers() headers: Record<string, string>) {
        this.monitorService.stop();
        return {};
    }

    async monitoring() {
        let value = true;
        while(value){
            await this.sleep(1 * 1000);
            value = await this.monitorService.isMonitorStarted();
            this.producerService.sendMessage(await this.monitorService.monitorData());
        }
    }

}
