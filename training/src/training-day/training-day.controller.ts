import { Controller, UseGuards, Headers, Get, Param, UseInterceptors } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AthleteService } from '../athlete/athlete.service';
import { TrainingDayService } from './training-day.service';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';

@Controller('training-day')
@UseInterceptors(BusinessErrorsInterceptor)
export class TrainingDayController {
  constructor(
    private readonly athleteService: AthleteService,
    private readonly trainingDayService: TrainingDayService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get(':date')
  async getDateProgram(
    @Headers() headers: Record<string, string>,
    @Param('date') date: string,
  ) {
    const athlete = await this.athleteService.getAthleteByToken(
      headers.authorization,
    );

    return this.trainingDayService.findOneByTrainingPlanAndDate(
      athlete.trainingPlan,
      date,
    );
  }
}
