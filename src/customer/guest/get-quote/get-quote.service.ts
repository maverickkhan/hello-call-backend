import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { commonMessage } from 'src/common/messages';
import { ResponseDto } from 'src/common/response.dto';
import { getConnection, Repository } from 'typeorm';
import { CreateGetQuoteDto } from './dto/create-get-quote.dto';
import { UpdateGetQuoteDto } from './dto/update-get-quote.dto';
import { GetQuote } from './entities/get-quote.entity';

@Injectable()
export class GetQuoteService {
  constructor(
    @InjectRepository
      (GetQuote) private getQuoteRepository: Repository<GetQuote>,
  ) { }
  async create(createGetQuoteDto: CreateGetQuoteDto): Promise<ResponseDto> {
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.startTransaction();
    try {
      const getQuoteRepo = queryRunner.manager.getRepository(GetQuote)
      const quoteEmail = await getQuoteRepo.save(createGetQuoteDto)
      await queryRunner.commitTransaction();
      return { message: commonMessage.getQuoteSave, data: quoteEmail };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new InternalServerErrorException(error);
    }
  }

  async findAll() {
    try {
      const email = await this.getQuoteRepository.find({ isDeleted: false })
      return { message: commonMessage.get, data: email };
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async findOne(id: number): Promise<ResponseDto> {
    try {
      const email = await this.getQuoteRepository.findOne({ id: id })
      return { message: commonMessage.get, data: email };
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async update(id: number, updateGetQuoteDto: UpdateGetQuoteDto): Promise<ResponseDto> {
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.startTransaction();
    try {
      const getQuoteRepo = queryRunner.manager.getRepository(GetQuote)
      const quoteEmail = await getQuoteRepo.save(updateGetQuoteDto)
      await queryRunner.commitTransaction();
      return { message: commonMessage.getQuoteUpdate, data: quoteEmail };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new InternalServerErrorException(error);
    }
  }

  async remove(id: number) {
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.startTransaction();
    try {
      const getQuoteRepo = queryRunner.manager.getRepository(GetQuote)
      const delet = await getQuoteRepo.update({ id: id }, { isDeleted: true, deletedAt: new Date() })
      await queryRunner.commitTransaction();
      if (delet.affected > 0) {
        return { message: commonMessage.delete, data: 'Successfully deleted' };
      }
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new InternalServerErrorException(error);
    }
  }
  
}
