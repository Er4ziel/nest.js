import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { uzytkownicy } from './typeorm/user';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<uzytkownicy[]>{
  //return this.appService.createUser('itest2','ntest2','test2@test.com','test12223');
  //const user = await this.appService.createUser('itest2','ntest2','test2@test.com','test12223');
  //return this.appService.updateUser(19,'itest3','ntest3','3test3@test.com','test122235',1);
  return this.appService.getAll();
  //return this.appService.deleteUser(0);
  }
}
