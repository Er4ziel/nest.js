import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import entities, { uzytkownicy} from './typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'projekt',
    entities,
    synchronize: true,
  }),
TypeOrmModule.forFeature([uzytkownicy])
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
