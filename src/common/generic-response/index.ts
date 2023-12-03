import { HttpStatus } from '@nestjs/common';

import { exceptionOptions } from '../constants';
import { IBaseResponse } from '../interfaces';

export * from './generic-response.dto';

export const baseResponse = ({
  success = true,
  data = {},
  info = {},
  message = 'Operación realizada correctamente',
}: IBaseResponse) => ({ success, data, info, message });

export const errorResponse = (error) =>
  exceptionOptions[error.status || HttpStatus.INTERNAL_SERVER_ERROR](error);
