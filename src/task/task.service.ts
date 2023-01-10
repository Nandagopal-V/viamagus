import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { ObjectID } from 'mongodb';

@Injectable()
export class TaskService {

  constructor(
    @InjectRepository(Task)
    private readonly  taskRepository: MongoRepository<Task>,
  ) {}
  
  async create(createTaskDto: CreateTaskDto) {
    await this.taskRepository.save(createTaskDto)
    return 'New task saved';
  }

  findAll() {
    return `This action returns all task `;
  }

 async findOne(asigneeparams: string) {
     let data= await this.taskRepository.find({
        where:{
          asignee : asigneeparams
        }

     })
    return data;
  }

 async update(id: string, updateTaskDto: UpdateTaskDto) {
  console.log(updateTaskDto.status);
  console.log(id);
  
  
  //  let data =await this.taskRepository.
  //  updateOne({_id:id},
  //  {$set:{status:updateTaskDto.status}});

  await this.taskRepository.findOneAndUpdate({_id:new ObjectID(id)},{$set:{status:updateTaskDto.status}})
//  await this.taskRepository.
//   updateOne({description:id
   
//   },{$set:{status:updateTaskDto.status}})
   let data =await this.taskRepository.find();

    return data;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }

 
}
