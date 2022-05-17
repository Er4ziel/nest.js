import { Column, Entity,  ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { konfiguracje } from "./konfiguracje";
import { uzytkownicy } from "./user";


@Entity()
export class zamowienia{
    @PrimaryGeneratedColumn()
    id_zam: number;

    @Column({
        default: () => 'NOW()',
    })
    data_zam : Date;

    @Column({
        default: () => 'NOW()',
    })
    przew_data_zam: Date;
    
    @ManyToOne(type => uzytkownicy, uzytkownicy => uzytkownicy.id)
    u : uzytkownicy

    @ManyToOne(type => konfiguracje, konfiguracje=> konfiguracje.z)
    k: konfiguracje[]
}