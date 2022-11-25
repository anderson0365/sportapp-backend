import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum Status {
    STARTED = 'started',
    STOPPED = 'stopped',
  }

@Entity()
export class MonitorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  status: Status;
}
