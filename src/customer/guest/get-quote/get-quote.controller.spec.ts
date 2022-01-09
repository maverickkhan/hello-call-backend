import { Test, TestingModule } from '@nestjs/testing';
import { GetQuoteController } from './get-quote.controller';
import { GetQuoteService } from './get-quote.service';

describe('GetQuoteController', () => {
  let controller: GetQuoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetQuoteController],
      providers: [GetQuoteService],
    }).compile();

    controller = module.get<GetQuoteController>(GetQuoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
