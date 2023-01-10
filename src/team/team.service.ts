import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { ObjectID } from 'mongodb';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamService {

  constructor(
    @InjectRepository(Team)
    private readonly  teamRepository: MongoRepository<Team>,
  ) {}


 async create(createTeamDto: CreateTeamDto) {
     await this.teamRepository.save(createTeamDto)
     let data =await this.teamRepository.find()
    return data;
  }

  findAll() {
    return `This action returns all team`;
  }

  findOne(id: number) {
    return `This action returns a #${id} team`;
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${id} team`;
  }

  remove(id: number) {
    return `This action removes a #${id} team`;
  }
}
