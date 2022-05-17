import { Column, Entity,OneToMany,PrimaryGeneratedColumn} from "typeorm";
import { wersje } from "./wersje";



@Entity()
export class silnik{
    @PrimaryGeneratedColumn()
    id_sil: number;

    @Column()
    nazwa: string;

    @Column()
    pojemnosc : number;

    @Column()
    moc : number;

    @Column()
    sr_zuz_pal : number;

    @Column()
    sr_emisja_CO2 : number;

    @Column()
    cena : number;

    @OneToMany(type => wersje, wersje => wersje.s)
    w : wersje[]
}