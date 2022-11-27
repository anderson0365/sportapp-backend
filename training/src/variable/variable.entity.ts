import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum VariableEntityType {
    PHYSIOLOGICAL = "physiological"
}

@Entity()
export class VariableEntity {

    constructor(
        type: VariableEntityType,
        name: string,
        units: string,
        value: string,
        athlete: string
    ){
        this.name = name;
        this.type = type;
        this.units = units;
        this.value = value;
        this.athlete = athlete;
    }

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    type: VariableEntityType;

    @Column()
    name: string;

    @Column({ nullable: true })
    units: string;

    @Column({ nullable: true })
    value: string;

    @Column()
    athlete: string;
}
