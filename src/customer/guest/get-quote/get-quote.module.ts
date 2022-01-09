import { Module } from '@nestjs/common';
import { GetQuoteService } from './get-quote.service';
import { GetQuoteController } from './get-quote.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GetQuote } from './entities/get-quote.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GetQuote])],
  controllers: [GetQuoteController],
  providers: [GetQuoteService]
})
export class GetQuoteModule {}
