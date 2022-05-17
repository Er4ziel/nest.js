import { Column, Entity,ManyToOne,OneToMany,ManyToMany,PrimaryGeneratedColumn, JoinTable} from "typeorm";
import { akcesoria } from "./akcesoria";
import { pakiety } from "./pakiety";
import { wersje } from "./wersje";
import { zamowienia } from "./zamowienia";


@Entity()
export class konfiguracje{
    @PrimaryGeneratedColumn()
    id_konf: number;

    @Column()
    model : string;

    @Column()
    cena_calkowita : number;

    @OneToMany(type => zamowienia, zamowienia => zamowienia.id_zam)
    z : zamowienia
    

    @ManyToOne(type => akcesoria, akcesoria => akcesoria.id_akc)
    a : akcesoria

    @ManyToMany(type => pakiety, (pakiety) => pakiety.id_pak)
    @JoinTable()
    p : pakiety

    @ManyToMany(type => wersje, wersje => wersje.k)
    w : wersje
}
