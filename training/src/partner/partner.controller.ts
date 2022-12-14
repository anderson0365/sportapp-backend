import { Controller, Get, UseInterceptors, UseGuards, Headers } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
import { PartnerService } from './partner.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('partners')
@UseInterceptors(BusinessErrorsInterceptor)
export class PartnerController {
    constructor(private readonly partnerService: PartnerService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll() {
      return await this.partnerService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get('activities')
    async findActivities(@Headers() headers: Record<string, string>) {
      return await this.partnerService.findActivities(headers.authorization);
    }
}