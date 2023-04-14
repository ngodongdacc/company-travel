import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as BodyParser from 'body-parser';
import { AppModule } from './app.module';
import { TimeoutInterceptor } from './interceptor/timeout.interceptor';
const logger = new Logger('Main');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(BodyParser.urlencoded({ extended: false }));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  const config = new DocumentBuilder()
    .setTitle('Api-company-cost')
    .setDescription('SEC platform')
    .addBearerAuth()
    // .addApiKey({ type: 'apiKey', name: 'axonize_api_access_token' }, 'axonize_api_token')
    .setVersion('1.0.0')
    .build();
  app.useGlobalInterceptors(new TimeoutInterceptor());
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/explorer', app, document);
  await app.listen(process.env.APP_PORT);
}
bootstrap().then(() => logger.log(`Service listening 👍: ${process.env.APP_PORT}`));
