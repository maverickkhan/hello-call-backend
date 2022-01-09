import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/database.config';
import { GetQuoteModule } from './customer/guest/get-quote/get-quote.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    GetQuoteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
