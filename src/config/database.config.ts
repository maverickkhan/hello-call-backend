import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { GetQuote } from 'src/customer/guest/get-quote/entities/get-quote.entity';
dotenv.config();

const dbConfig = {
    host:
      process.env.TYPE_ORM_DATABASE_HOST ||
      `127.0.0.1`,
    port: process.env.TYPE_ORM_DATABASE_PORT || 3306,
    username: process.env.TYPE_ORM_DATABASE_USERNAME || 'root',
    password: process.env.TYPE_ORM_DATABASE_PASSWORD || '',
    name: process.env.TYPE_ORM_DATABASE_NAME || `hello_call`,
  };

  console.log(dbConfig);
  export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: dbConfig.host,
    port: +dbConfig.port,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.name,
    logging: false,
    entities: [
        GetQuote
    ],
    
    synchronize: false,
  };