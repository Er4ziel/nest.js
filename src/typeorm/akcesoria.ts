import { Column, Entity, ManyToOne,OneToMany,PrimaryGeneratedColumn} from "typeorm";
import { konfiguracje } from "./konfiguracje";



@Entity()
export class akcesoria{
    @PrimaryGeneratedColumn()
    id_akc: number;

    @Column()
    nazwa: string;

    @Column()
    cena : number;

    @OneToMany(type => konfiguracje, konfiguracje => konfiguracje.a)
    k: konfiguracje
}