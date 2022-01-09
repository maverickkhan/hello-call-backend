import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

const logger = new Logger('MAIN');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Hello Call')
    .setDescription('The Hello Call API description')
    .setVersion('1.0')
    .addTag('HelloCall')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const PORT = 3000;
  await app.listen(PORT);
  logger.log(`Application running on port: ${PORT}`);
}
bootstrap();
