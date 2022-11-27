import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceService } from '../place/place.service';
import { TrainingAdditionalDataEntity } from '../training-additional-data/training-additional-data.entity';
import { TrainingAdditionalDataService } from '../training-additional-data/training-additional-data.service';
import { ActivityController } from './activity.controller';
import { ActivityEntity } from './activity.entity';
import { ActivityService } from './activity.service';
import { PlaceEntity } from '../place/place.entity';
import { AthleteService } from '../athlete/athlete.service';
import { JwtService } from '@nestjs/jwt';
import { VariableService } from '../variable/variable.service';
import { HttpModule} from '@nestjs/axios';
import { VariableEntity } from '../variable/variable.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VariableEntity, ActivityEntity, TrainingAdditionalDataEntity, PlaceEntity]), HttpModule],
  controllers: [ActivityController],
  providers: [ActivityService, TrainingAdditionalDataService, PlaceService, AthleteService, JwtService, VariableService]
})
export class ActivityModule {}
