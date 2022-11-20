import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActivityEntity } from '../activity/activity.entity';
import { Repository } from 'typeorm';
import { PartnerEntity } from './partner.entity';

@Injectable()
export class PartnerService {
  constructor(
    @InjectRepository(PartnerEntity)
  private readonly partnerRepository: Repository<PartnerEntity>,
  ) {}

  async findAll(): Promise<PartnerEntity[]> {
    const partners: PartnerEntity[] = await this.partnerRepository.find({relations: ['activities']});
    return partners;
}

}