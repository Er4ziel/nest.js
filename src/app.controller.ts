import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { uzytkownicy } from './typeorm/user';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<uzytkownicy[]>{
    //return this.appService.createUser('itest','ntest','test@test.com','test123');
   return this.appService.getAll();
  }
}
