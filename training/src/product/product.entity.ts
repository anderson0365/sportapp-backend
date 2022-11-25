import { PartnerEntity } from "../partner/partner.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    picture: string;

    @ManyToOne(() => PartnerEntity, (partner) => partner.products)
    partner: PartnerEntity;
}