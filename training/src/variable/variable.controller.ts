import { Controller, Get, UseGuards, UseInterceptors, Headers } from '@nestjs/common';
import { AthleteService } from 'src/athlete/athlete.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { VariableService } from './variable.service';

@Controller('variable')
@UseInterceptors(BusinessErrorsInterceptor)
export class VariableController {

    constructor(
        private readonly athleteService: AthleteService,
        private readonly variableService: VariableService
    ){}

    @UseGuards(JwtAuthGuard)
    @Get('physiological')
    async getAthletePhysiologicalsVariables(@Headers() headers: Record<string, string>) {
      const athleteId = await this.athleteService.getAthleteId(headers);
      return { data: await this.variableService.getAthletePhysiologicalsVariables(athleteId)};
    }
}
