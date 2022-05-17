import { Column, Entity,ManyToMany,PrimaryGeneratedColumn} from "typeorm";
import { wersje } from "./wersje";



@Entity()
export class nadwozie{
    @PrimaryGeneratedColumn()
    id_nadw: number;

    @Column()
    kolor: string;

    @Column()
    cena : number;

    @ManyToMany(type => wersje, wersje => wersje.n)
    w : wersje
}