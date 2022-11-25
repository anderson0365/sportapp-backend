import { Controller, Get, Headers, Param } from '@nestjs/common';
import { MonitorService } from './monitor.service';

@Controller('monitoring')
export class MonitorController {

    constructor(
        private readonly monitorService: MonitorService,
      ) {}
    
      @Get('notifications/:notificationNumber')
      async getNotification(@Headers() headers: Record<string, string>, @Param('notificationNumber') notificationNumber: number) {
           return  { data: this.monitorService.getNotifications(notificationNumber)} ;
      }

}
