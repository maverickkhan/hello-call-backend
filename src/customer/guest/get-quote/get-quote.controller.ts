import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { GetQuoteService } from './get-quote.service';
import { CreateGetQuoteDto } from './dto/create-get-quote.dto';
import { UpdateGetQuoteDto } from './dto/update-get-quote.dto';
import { TransformInterceptor } from 'src/common/transform.interceptor';

@UseInterceptors(TransformInterceptor)
@Controller('get-quote')
export class GetQuoteController {
  constructor(private readonly getQuoteService: GetQuoteService) {}

  @Post()
  create(@Body() createGetQuoteDto: CreateGetQuoteDto) {
    return this.getQuoteService.create(createGetQuoteDto);
  }

  @Get()
  findAll() {
    return this.getQuoteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getQuoteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGetQuoteDto: UpdateGetQuoteDto) {
    return this.getQuoteService.update(+id, updateGetQuoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.getQuoteService.remove(+id);
  }
}
