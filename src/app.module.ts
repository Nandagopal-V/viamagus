import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { Task } from './task/entities/task.entity';
import { TeamModule } from './team/team.module';
import { Team } from './team/entities/team.entity';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(),TaskModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGODB_CONNECTION_STRING,
      database:process.env.MONGODB_DATABASE,
      entities: [
        Task,Team
      ],
      ssl: true,
      useUnifiedTopology: false,
      useNewUrlParser: true
    }),
    TeamModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
