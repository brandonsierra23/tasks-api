import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

class TaskDTO {
  @ApiPropertyOptional({
    description: 'Descripcion de la Tarea',
    example: 'Ir al trabajo para ...',
    type: 'string',
    minimum: 3,
  })
  @IsString()
  @IsOptional()
  @MinLength(3)
  description?: string;

  @ApiPropertyOptional({
    description: 'Estado de la tarea',
    example: true,
    type: 'boolean',
  })
  @IsBoolean()
  @IsOptional()
  done?: boolean;
}

export class CreateTaskDTO extends TaskDTO {
  @ApiProperty({
    description: 'Titulo de la Tarea',
    example: 'Ir al trabajo',
    type: 'string',
    minimum: 3,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;
}

export class UpdateTaskDTO extends TaskDTO {
  @ApiPropertyOptional({
    description: 'Titulo de la Tarea',
    example: 'Ir al trabajo',
    type: 'string',
    minimum: 3,
  })
  @IsString()
  @IsOptional()
  @MinLength(3)
  title?: string;
}
