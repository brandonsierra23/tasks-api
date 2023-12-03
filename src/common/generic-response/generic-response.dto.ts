import { ApiProperty } from '@nestjs/swagger';

export class GenericResponse {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  data: object;

  @ApiProperty()
  info: object;

  @ApiProperty()
  message: string;
}
