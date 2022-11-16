import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VariableEntity, VariableEntityType } from './variable.entity';

@Injectable()
export class VariableService {
    constructor(
        @InjectRepository(VariableEntity)
        private readonly variableRepository: Repository<VariableEntity>,
    ) { }

    getAthletePhysiologicalsVariables(athlete: string): Promise<VariableEntity[]> {
        return this.variableRepository.find({ where: { athlete, type: VariableEntityType.PHYSIOLOGICAL } });
    }

    create(variable: VariableEntity): Promise<VariableEntity> {
        return this.variableRepository.save(variable);
    }

    async recalculatePhysiologicalsVariables(athlete: string): Promise<VariableEntity[]> {

        const variables = await this.getAthletePhysiologicalsVariables(athlete);
        for (let variable of variables) {
            switch (variable.name) {
                case "blood pressure":
                    variable.value = `${this.getRandomNumber(100, 200)}/${this.getRandomNumber(60, 140)}`
                    break;
                case "heart rate":
                    variable.value = "" + this.getRandomNumber(60, 200) //unit: ppm
                    break;
                case "breathing frequency":
                    variable.value = "" + this.getRandomNumber(15, 40) //unit: bpm
                    break;
                case "oxygen saturation":
                    variable.value = "" + this.getRandomNumber(60, 99) //unit: %
                    break;
                case "temperature":
                    variable.value = "" + this.getRandomNumber(35, 38, 2) //unit: °C
                    break;
                default:
                    break;
            }
            await this.variableRepository.save(variable)
        }

        return variables
    }

    getRandomNumber(min: number, max: number, precision = 0){
        const value = Math.random() * (max - min) + min;
        if (precision == 0)
            return Math.round(value)
        
        const delta = Math.pow(10, precision)
        return Math.round(value * delta)/delta
    }
}
