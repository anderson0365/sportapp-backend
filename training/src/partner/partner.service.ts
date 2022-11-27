import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { PartnerEntity } from './partner.entity';
import { AthleteService } from '../athlete/athlete.service';

@Injectable()
export class PartnerService {
  constructor(
    @InjectRepository(PartnerEntity)
    private readonly partnerRepository: Repository<PartnerEntity>,
    @InjectDataSource() private readonly connection: Connection,
    private readonly athleteService: AthleteService,
  ) {}

  async findAll(): Promise<PartnerEntity[]> {
    const partners: PartnerEntity[] = await this.partnerRepository.find({relations: ['activities']});
    return partners;
  }

  async findActivities(token: string): Promise<any[]> {
    let partners = await this.findAll()
    let partner = partners[0];
    let result = await this.connection.query('select act.name, tra.date, tra."trainingPlanId" from activity_entity act join partner_entity part ON part.id = act."partnerId" join training_day_entity_activities_activity_entity tra_day ON tra_day."activityEntityId" = act.id join training_day_entity tra ON tra.id = tra_day."trainingDayEntityId" where part.id = ' + "'" + partner.id + "'" + ';');
    if(result) {
      for (let data of result) {
        let athlete = await this.athleteService.getAthleteByTrainingPlan(token, data.trainingPlanId);
        data.athlete = athlete.name + " " + athlete.lastName;
      }
    }
    return result;
  }

}