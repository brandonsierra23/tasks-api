import { Injectable } from '@nestjs/common';
import { CreateTaskDTO, UpdateTaskDTO } from './dto/task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from 'src/schemas/task.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  getAll() {
    return this.taskModel.find();
  }

  create(createTask: CreateTaskDTO) {
    return this.taskModel.create(createTask);
  }

  getById(id: string) {
    return this.taskModel.findById(id);
  }

  update(id: string, updatedFields: UpdateTaskDTO) {
    return this.taskModel.findByIdAndUpdate(id, updatedFields, { new: true });
  }

  delete(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }
}
