import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Put,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { TasksService } from './tasks.service';
import { CreateTaskDTO, UpdateTaskDTO } from './dto/task.dto';
import { Swagger, EModules, RestApiRequest } from '../common';

@Controller('tasks')
@ApiTags('Tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Swagger({
    RestApi: RestApiRequest.get,
    module: EModules.tasks,
    link: 'all',
  })
  @Get()
  async getAll() {
    return await this.taskService.getAll();
  }

  @Swagger({
    RestApi: RestApiRequest.get,
    module: EModules.tasks,
  })
  @Get(':id')
  async findById(@Param('id') id: string) {
    const task = await this.taskService.getById(id);
    if (!task) throw new NotFoundException('Task not found');

    return task;
  }

  @Swagger({
    RestApi: RestApiRequest.post,
    module: EModules.tasks,
  })
  @Post()
  async create(@Body() newTask: CreateTaskDTO) {
    try {
      return await this.taskService.create(newTask);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Task already exists');
      }
      throw error;
    }
  }

  @Swagger({
    RestApi: RestApiRequest.delete,
    module: EModules.tasks,
  })
  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const task = await this.taskService.delete(id);
    if (!task) throw new NotFoundException('Task not found');
  }

  @Swagger({
    RestApi: RestApiRequest.patch,
    module: EModules.tasks,
  })
  @Put(':id')
  async update(@Param('id') id: string, @Body() updatedFields: UpdateTaskDTO) {
    const task = await this.taskService.update(id, updatedFields);
    if (!task) throw new NotFoundException('Task not found');

    return task;
  }
}
