import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { exceptionOptions } from '../common';
import { CreateTaskDTO, UpdateTaskDTO } from './dto/task.dto';
import { Task } from '../schemas/task.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  getAll() {
    return this.taskModel.find();
  }

  create(createTask: CreateTaskDTO) {
    try {
      return this.taskModel.create(createTask);
    } catch (error) {
      return exceptionOptions[error.status || 500](error);
    }
  }

  getById(id: string) {
    try {
      return this.taskModel.findById(id);
    } catch (error) {
      return exceptionOptions[error.status || 500](error);
    }
  }

  update(id: string, updatedFields: UpdateTaskDTO) {
    try {
      return this.taskModel.findByIdAndUpdate(id, updatedFields, { new: true });
    } catch (error) {
      return exceptionOptions[error.status || 500](error);
    }
  }

  delete(id: string) {
    try {
      return this.taskModel.findByIdAndDelete(id);
    } catch (error) {
      return exceptionOptions[error.status || 500](error);
    }
  }
}
