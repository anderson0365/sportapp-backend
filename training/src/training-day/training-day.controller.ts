import { Controller, UseGuards, Headers, Get, Body } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AthleteService } from '../athlete/athlete.service';
import { TrainingDayService } from './training-day.service';
import { DateProgramInfoDto } from './dto/date-program-info.dto';

@Controller('training-day')
export class TrainingDayController {
  constructor(
    private readonly athleteService: AthleteService,
    private readonly trainingDayService: TrainingDayService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getDateProgram(
    @Headers() headers: Record<string, string>,
    @Body() dateInfo: DateProgramInfoDto,
  ) {
    const athlete = await this.athleteService.getAthleteByToken(
      headers.authorization,
    );

    return this.trainingDayService.findOneByTrainingPlanAndDate(
      athlete.trainingPlan,
      dateInfo.date,
    );
  }
}
