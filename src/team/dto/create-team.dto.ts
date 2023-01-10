import { ObjectID } from "typeorm"
import {
    IsNotEmpty,
    IsString,
    IsArray
  } from 'class-validator';

export class CreateTeamDto {
    id:ObjectID

    @IsString()
    @IsNotEmpty()
    name:string

    @IsNotEmpty()
    @IsArray()
    members:string[]
}
