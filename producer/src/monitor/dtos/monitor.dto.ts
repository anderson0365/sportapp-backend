import {  IsNumber } from 'class-validator';

export class MonitorDto {

    @IsNumber()
    heartBeat: number;

    @IsNumber()
    SPO2: number;

}