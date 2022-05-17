import { Column, Entity,OneToMany,PrimaryGeneratedColumn} from "typeorm";
import { pakiety } from "./pakiety";


@Entity()
export class opcjedod{
    @PrimaryGeneratedColumn()
    id_opcd: number;

    @Column()
    cecha_opcji: string;

    @Column()
    cena : number;

    @OneToMany(type => pakiety, pakiety => pakiety.d)
    p: pakiety[]

}