import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MonitorEntity } from './monitor.entity';

export enum Status {
    STARTED = 'started',
    STOPPED = 'stopped',
  }

@Injectable()
export class MonitorService {
    constructor(
        @InjectRepository(MonitorEntity)
        private readonly monitorRepository: Repository<MonitorEntity>,
    ){}

    public async start()  {
        let status : MonitorEntity[] = await this.monitorRepository.find({});
        if (status.length == 0) {
            this.monitorRepository.save({status: Status.STARTED})
        }
        else {
            status[0].status = Status.STARTED;
            this.monitorRepository.save(status[0]);
        }
    }

    public async stop()  {
        let status : MonitorEntity[] = await this.monitorRepository.find({});
        if (status.length == 0) {
            this.monitorRepository.save({status: Status.STOPPED})
        }
        else {
            status[0].status = Status.STOPPED;
            this.monitorRepository.save(status[0]);
        }
    }

    public async isMonitorStarted()  {
        let status : MonitorEntity[] = await this.monitorRepository.find({});
        if (status.length == 0) {
            return false
        }
        else {
            return status[0].status === Status.STARTED;
        }
    }

    public async monitorData()  {
        return {
            heartRate : this.randomBetween(140,150),
            breathingFrequency : this.randomBetween(15, 20),
            temperature : this.randomBetween(34, 35),
            oxigenSaturation : this.randomBetween(90, 92),
        }
    }

    private randomBetween(min, max) {  
        return Math.floor(
          Math.random() * (max - min + 1) + min
        )
      }
}
