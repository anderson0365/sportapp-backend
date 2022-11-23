import { ProductEntity } from "src/product/product.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ActivityEntity } from "../activity/activity.entity";

@Entity()
export class PartnerEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @OneToMany(() => ActivityEntity, (activity) => activity.partner)
    @JoinColumn()
    activities: ActivityEntity[];

    @OneToMany(() => ProductEntity, (product) => product.partner)
    @JoinColumn()
    products: ProductEntity[];
}