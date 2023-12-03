import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // elimina las propiedades no deseadas de los objetos
      forbidNonWhitelisted: true, // aparece un error cuando se envíen propiedades no deseadas en la solicitud
      errorHttpStatusCode: 422, //  cambia el codigo del estatus HTTP al fallar una validacion
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Tasks-API ')
    .setDescription('Documentacion de API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/doc', app, document);

  await app.listen(Number(process.env.PORT) || 3000);
}
bootstrap();
