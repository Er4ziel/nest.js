import { Column, Entity,JoinTable,ManyToMany,ManyToOne,OneToMany,PrimaryGeneratedColumn} from "typeorm";
import { konfiguracje } from "./konfiguracje";
import { opcjedod } from "./opcje_dodatkowe";




@Entity()
export class pakiety{
    @PrimaryGeneratedColumn()
    id_pak: number;

    @Column()
    nazwa: string;

    @Column()
    cena : number;

    @Column()
    cecha_pakiet : string;

    @ManyToMany(type => konfiguracje, konfiguracje => konfiguracje.p)
    
    k: konfiguracje[]

    @ManyToOne(type => opcjedod, opcjedod => opcjedod.id_opcd)
    d: opcjedod

}