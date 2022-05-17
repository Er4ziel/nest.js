import { Column, Entity,ManyToMany,PrimaryGeneratedColumn} from "typeorm";
import { wersje } from "./wersje";



@Entity()
export class wnetrza{
    @PrimaryGeneratedColumn()
    id_wne: number;

    @Column()
    cena: number;

    @Column()
    rodzaj_fotel : string;

    @Column()
    tapicerka_material : string;

    @Column()
    tapicerka_kolor : string

    @Column()
    kolor_przeszycia : string

    @ManyToMany(type => wersje, wersje => wersje.wn)
    w : wersje
}