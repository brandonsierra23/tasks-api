import {
  ConflictException,
  InternalServerErrorException,
  UnauthorizedException,
  HttpException,
  UnprocessableEntityException,
  ForbiddenException,
} from '@nestjs/common';

export const exceptionOptions = {
  500: (error): HttpException => {
    throw new InternalServerErrorException(`${error.name}: ${error.message}`);
  },
  401: (error): HttpException => {
    throw new UnauthorizedException(error.message);
  },
  403: (error): HttpException => {
    throw new ForbiddenException(error.message);
  },
  409: (error): HttpException => {
    throw new ConflictException(error.message);
  },
  422: (error): HttpException => {
    throw new UnprocessableEntityException(error.message);
  },
};
