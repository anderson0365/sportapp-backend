import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlaceEntity } from "./place.entity";


@Injectable()
export class PlaceService {

    constructor(
        @InjectRepository(PlaceEntity)
        private readonly placeRepository: Repository<PlaceEntity>,
    ){}

    async create(place: PlaceEntity): Promise<PlaceEntity> {
        return await this.placeRepository.save(place);
      }

    async findPlaceByName(name: string): Promise<PlaceEntity> {
        return await this.placeRepository
          .createQueryBuilder("place")
          .where("lower(place.name) like lower(:name)", { name: `%${name}%` })
          .getOne();
      }

}