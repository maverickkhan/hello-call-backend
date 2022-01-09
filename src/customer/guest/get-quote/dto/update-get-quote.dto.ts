import { PartialType } from '@nestjs/swagger';
import { CreateGetQuoteDto } from './create-get-quote.dto';

export class UpdateGetQuoteDto extends PartialType(CreateGetQuoteDto) {}
