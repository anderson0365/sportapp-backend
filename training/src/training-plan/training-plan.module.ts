import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityEntity } from '../activity/activity.entity';
import { ActivityService } from '../activity/activity.service';
import { AthleteService } from '../athlete/athlete.service';
import { PlaceEntity } from '../place/place.entity';
import { PlaceService } from '../place/place.service';
import { TemplateTrainigDayEntity } from '../template-training-day/template-trainig-day.entity';
import { TemplateTrainingDayService } from '../template-training-day/template-training-day.service';
import { TemplateTrainingPlanEntity } from '../template-training-plan/template-training-plan.entity';
import { TemplateTrainingPlanService } from '../template-training-plan/template-training-plan.service';
import { TrainingDayEntity } from '../training-day/training-day.entity';
import { TrainingDayService } from '../training-day/training-day.service';
import { VariableEntity } from '../variable/variable.entity';
import { VariableService } from '../variable/variable.service';
import { TrainingPlanController } from './training-plan.controller';
import { TrainingPlanEntity } from './training-plan.entity';
import { TrainingPlanService } from './training-plan.service';

@Module({
  imports: [TypeOrmModule.forFeature([VariableEntity, TrainingPlanEntity, TemplateTrainingPlanEntity, TemplateTrainigDayEntity, TrainingDayEntity, ActivityEntity, PlaceEntity]), HttpModule],
  providers: [VariableService, TrainingPlanService, AthleteService, TemplateTrainingPlanService, TemplateTrainingDayService, TrainingDayService, ActivityService, PlaceService, JwtService],
  controllers: [TrainingPlanController],
})
export class TrainingPlanModule {}
