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
import { TasksService } from './tasks.service';
import { CreateTaskDTO, UpdateTaskDTO } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAll() {
    return this.taskService.getAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const task = await this.taskService.getById(id);
    if (!task) throw new NotFoundException('Task not found');

    return task;
  }

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

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const task = await this.taskService.delete(id);
    if (!task) throw new NotFoundException('Task not found');
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatedFields: UpdateTaskDTO) {
    const task = await this.taskService.update(id, updatedFields);
    if (!task) throw new NotFoundException('Task not found');

    return task;
  }
}
