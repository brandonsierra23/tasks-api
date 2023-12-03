import { applyDecorators, Delete, Get, Patch, Post } from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiConsumes,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiResponse,
  ApiUnauthorizedResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';

import { GenericResponse } from '../generic-response';
import { GenericResponseError } from '../generic-response/generic-response-error.dto';
import { successMessage, ISwaggerResponseOptions } from '../../common';

export const Swagger = ({
  description,
  module,
  status,
  RestApi,
  link = '',
}: ISwaggerResponseOptions) => {
  const restOptions = {
    Get: Get,
    Post: Post,
    Patch: Patch,
    Delete: Delete,
  };

  // TODO: Agregar constantes y/o enum para los mensajes
  return applyDecorators(
    ApiResponse({
      status: status || 200,
      description: description || successMessage(module).found,
      type: GenericResponse,
    }),
    ApiForbiddenResponse({
      description: 'Este usuario no cuenta con suficientes permisos',
      type: GenericResponseError,
    }),
    ApiConflictResponse({
      description: 'Este usuario no cuenta con suficientes permisos',
      type: GenericResponseError,
    }),
    ApiUnauthorizedResponse({
      type: GenericResponseError,
      description: 'Unauthorized',
    }),
    ApiUnprocessableEntityResponse({
      type: GenericResponseError,
      description: 'Unprocessable entity',
    }),
    ApiInternalServerErrorResponse({
      type: GenericResponseError,
      description: 'Internal server error',
    }),
    ApiConsumes('application/json'),
    restOptions[RestApi](link),
  );
};
