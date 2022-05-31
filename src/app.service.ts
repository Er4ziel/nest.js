import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JoinColumn, Repository } from 'typeorm';
import { konfiguracje, uzytkownicy, zamowienia } from './typeorm';

@Injectable()
export class AppService {
  constructor(@InjectRepository(uzytkownicy) private usersRespository: Repository<uzytkownicy>){
  }
  getAll(): Promise<uzytkownicy[]>{
    return this.usersRespository.find({
      relations : ['zamowienia'] 
    });
  }
  


    
    async getOneById(id: number) : Promise<uzytkownicy>{
      try{
        const user = await this.usersRespository.findOneOrFail(id);
        return user;
      }catch (err){
        throw err;
      }
    }
    createUser(imie : string, nazwisko:string, email:string, haslo:string) : Promise<uzytkownicy>{
      const newUser = this.usersRespository.create({imie,nazwisko,email,haslo})
      return this.usersRespository.save(newUser);
    }
    async updateUser(id: number, imie: string, nazwisko: string, email: string, haslo: string, typ: number) : Promise<uzytkownicy>{
      const user = await this.getOneById(id);
      user.imie = imie;
      user.nazwisko= nazwisko;
      user.haslo = haslo;
      user.email = email;
      user.typ = typ;
      return this.usersRespository.save(user);
    }
    async deleteUser(id: number): Promise<uzytkownicy>{
      const user = await this.getOneById(id);
      return this.usersRespository.remove(user);
    }
  getHello(): string {
    return 'Hello World!';
  }
}
