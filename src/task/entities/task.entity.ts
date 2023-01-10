import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('task')
export class Task {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    description: string;

    @Column()
    due_date: Date;

    @Column()
    asignee: string;

    @Column()
    status: string;

    constructor(Task?: Partial<Task>) {
        Object.assign(this, Task);
      }
}
