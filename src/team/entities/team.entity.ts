


import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('team')
export class Team {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;

   

    @Column()
    members: string[];

 

    constructor(Team?: Partial<Team>) {
        Object.assign(this, Team);
      }
}