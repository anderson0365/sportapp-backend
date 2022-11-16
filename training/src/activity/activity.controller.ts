import { Body, Controller, Get, Param, Post, Headers, UseGuards } from '@nestjs/common';
import { AthleteService } from 'src/athlete/athlete.service';
import { VariableService } from 'src/variable/variable.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { TrainingAdditionalDataEntity } from '../training-additional-data/training-additional-data.entity';
import { TrainingAdditionalDataService } from '../training-additional-data/training-additional-data.service';
import { ActivityService } from './activity.service';
import { SetTimeDto } from './dto/set-time.dto'

@Controller('activity')
export class ActivityController {
    constructor(
        private readonly activityService: ActivityService,
        private readonly trainingDataService: TrainingAdditionalDataService,
        private readonly variableService: VariableService,
        private readonly athleteService: AthleteService
      ) {}
    
    @UseGuards(JwtAuthGuard)
    @Get(':activityId')
    async findOne(@Param('activityId') activityId: string) {
      return await this.activityService.findOne(activityId);
    }

    @UseGuards(JwtAuthGuard)
    @Post(':activityId/set_start')
    async set_start(@Param('activityId') activityId: string, @Body() time_to_set: SetTimeDto ) {
      const activity =  await this.activityService.findOne(activityId);
      let trainingData = new TrainingAdditionalDataEntity();
      trainingData.started_at = time_to_set.time;
      trainingData = await this.trainingDataService.create(trainingData);
      activity.trainingAdditionalData = trainingData;
      return await this.activityService.update(activityId, activity);
    }

    @UseGuards(JwtAuthGuard)
    @Post(':activityId/set_end')
    async set_end(
      @Headers() headers: Record<string, string>,
      @Param('activityId') activityId: string,
      @Body() time_to_set: SetTimeDto ) {
        const activity =  await this.activityService.findOne(activityId);
        const trainingData = activity.trainingAdditionalData;
        trainingData.ended_at = time_to_set.time;
        await this.trainingDataService.update(trainingData.id, trainingData);

        // Recualculate varaibles
        const athleteId = this.athleteService.getAthleteId(headers);
        await this.variableService.recalculatePhysiologicalsVariables(athleteId);

        return await this.activityService.findOne(activityId);
    }

}
