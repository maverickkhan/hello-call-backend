import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
// import { jwtConfig } from '../../config/jwt-token.config';
import { SignInDto } from '../dto/create-auth.dto';
import { Connection } from 'typeorm';
import { Users } from '../entities/auth.entity';
import { Crypt } from 'src/common/crypt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectConnection()
    private readonly connection: Connection,
  ) {
    
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // secretOrKey: jwtConfig.secret,
      secretOrKey: 'helloCall',
    });

  }

  async validate(payload: SignInDto): Promise<any> {

    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const { email } = payload;
      const userRepo = await queryRunner.manager.getRepository(Users);
      const user = await userRepo
        .createQueryBuilder('user')
        .innerJoinAndSelect('user.role', 'role', `role.id = user.roleId`)
        .where('user.email = :email', { email })
        .andWhere('user.isDeleted = false')
        .orderBy('user.id', 'ASC')
        .getOne();
      if (!user) {
        throw new UnauthorizedException();
      }
      await queryRunner.commitTransaction();
      return { ...user };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new InternalServerErrorException(error);
    } finally {
      await queryRunner.release();
    }
  }
}
