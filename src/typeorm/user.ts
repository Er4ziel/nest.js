import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { zamowienia } from "./zamowienia";


@Entity()
export class uzytkownicy{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        default: '',
    })
    imie: string;

    @Column({
        nullable: false,
        default: '',
    })
    nazwisko: string;


    @Column({
        name: 'email_address',
        nullable: false,
        default: '',
    })
    email: string;

    @Column({
        nullable: false,
        default: '',
    })
    haslo:string;

    @Column({
        nullable: false,
        default: '1',
    })
    typ: number;

    @OneToMany(type => zamowienia, zamowienia=> zamowienia.u)
    zamowienia: zamowienia[]
   
}




