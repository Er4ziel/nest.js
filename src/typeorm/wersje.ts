import { Column, Entity,JoinTable,ManyToMany,ManyToOne,PrimaryGeneratedColumn} from "typeorm";
import { felgi } from "./felgi";
import { konfiguracje } from "./konfiguracje";
import { nadwozie } from "./nadwozie";
import { silnik } from "./silnik";
import { wnetrza } from "./wnetrza";



@Entity()
export class wersje{
    @PrimaryGeneratedColumn()
    id_wer: number;

    @Column()
    nazwa: string;

    @Column()
    podst_wypo : string;

    @Column()
    cena : number;

    @ManyToMany(type => konfiguracje, konfiguracje => konfiguracje.id_konf)
    @JoinTable()
    k : konfiguracje[]

    @ManyToOne(type => silnik, silnik => silnik.id_sil)
    s : silnik

    @ManyToOne(type => felgi, felgi => felgi.id_fel)
    f : felgi

    @ManyToMany(type => nadwozie, nadwozie => nadwozie.id_nadw)
    @JoinTable()
    n : nadwozie[]

    @ManyToMany(type => wnetrza, wnetrza => wnetrza.id_wne)
    @JoinTable()
    wn : wnetrza[]
}