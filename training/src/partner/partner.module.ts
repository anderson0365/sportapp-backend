import { HttpModule } from "@nestjs/axios";
import { JwtService } from "@nestjs/jwt";
import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PartnerEntity } from "./partner.entity";
import { PartnerService } from "./partner.service";
import { PartnerController } from './partner.controller';
import { ActivityEntity } from "../activity/activity.entity";
import { AthleteService } from "../athlete/athlete.service";

@Module({
    imports: [TypeOrmModule.forFeature([PartnerEntity, ActivityEntity]), HttpModule],
    providers: [PartnerService, JwtService, AthleteService],
    controllers: [PartnerController],
  })
  export class PartnerModule {}