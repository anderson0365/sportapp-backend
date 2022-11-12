import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceService } from '../place/place.service';
import { TrainingAdditionalDataEntity } from '../training-additional-data/training-additional-data.entity';
import { TrainingAdditionalDataService } from '../training-additional-data/training-additional-data.service';
import { ActivityController } from './activity.controller';
import { ActivityEntity } from './activity.entity';
import { ActivityService } from './activity.service';
import { PlaceEntity } from '../place/place.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ActivityEntity, TrainingAdditionalDataEntity, PlaceEntity])],
  controllers: [ActivityController],
  providers: [ActivityService, TrainingAdditionalDataService, PlaceService]
})
export class ActivityModule {}
