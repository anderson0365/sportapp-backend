import { Module } from '@nestjs/common';
import { AthleteService } from './athlete.service';
import { HttpModule, HttpService} from '@nestjs/axios';
import { JwtModule, JwtService } from '@nestjs/jwt';
import constants from '../shared/security/constants';

@Module({
  imports: [
    JwtModule.register({
      secret: constants.JWT_SECRET,
      signOptions: { expiresIn: constants.JWT_EXPIRES_IN },
    }), HttpModule],
  providers: [AthleteService, JwtService],
})
export class AthleteModule {}
