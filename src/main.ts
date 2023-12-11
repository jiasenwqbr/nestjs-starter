import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
// import { logger } from './common/middleware/logger.middleware-func';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //app.use(logger);
  // set swagger
  const swaggerOptions = new DocumentBuilder()
    .setTitle('nestjs-starter')
    .setDescription('nest starter project api document')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('doc', app, document);

  await app.listen(3000);
}
bootstrap();
