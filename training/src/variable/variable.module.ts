import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AthleteService } from 'src/athlete/athlete.service';
import { VariableEntity } from './variable.entity';
import { VariableService } from './variable.service';
import { VariableController } from './variable.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([VariableEntity]), HttpModule],
  providers: [VariableService, AthleteService, JwtService],
  controllers: [VariableController]
})
export class VariableModule {}
