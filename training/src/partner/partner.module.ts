import { HttpModule } from "@nestjs/axios";
import { JwtService } from "@nestjs/jwt";
import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PartnerEntity } from "./partner.entity";
import { PartnerService } from "./partner.service";
import { PartnerController } from './partner.controller';

@Module({
    imports: [TypeOrmModule.forFeature([PartnerEntity]), HttpModule],
    providers: [PartnerService, JwtService],
    controllers: [PartnerController],
  })
  export class PartnerModule {}