import { ApiProperty } from '@nestjs/swagger';

export class GenericResponseError {
  @ApiProperty({
    example: false,
  })
  success: boolean;

  @ApiProperty()
  data: object;

  @ApiProperty()
  info: object;

  @ApiProperty()
  message: string;
}
