import { Column, Entity,OneToMany,PrimaryGeneratedColumn} from "typeorm";
import { wersje } from "./wersje";

@Entity()
export class felgi{
    @PrimaryGeneratedColumn()
    id_fel: number;

    @Column()
    rozmiar_felgi: number;

    @Column()
    material : string;

    @Column()
    rozmiar_opona : number;

    @Column()
    rozmiar_tarcze_ham: number;

    @Column()
    cena : number;

    @OneToMany(type => wersje, wersje => wersje.f)
    w : wersje[]
}