import 'dotenv/config';
import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

@Module({
  imports: [MongooseModule.forRoot(URI), TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
