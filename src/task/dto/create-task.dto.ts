import { ObjectID } from "typeorm"
import {
    IsNotEmpty,
    IsString,
    IsDateString
  } from 'class-validator';

export class CreateTaskDto {
    id: ObjectID

    @IsString()
    @IsNotEmpty()
    description: string

    @IsNotEmpty()
    @IsDateString()
    due_date: Date

    @IsString()
    @IsNotEmpty()
    asignee: string

    @IsString()
    @IsNotEmpty()
    status: string
}
