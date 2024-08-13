import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestLogService } from './restlog.service';
import { RestLogController } from './restlog.controller';
import { RestLog } from './restlog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RestLog])],
  providers: [RestLogService],
  controllers: [RestLogController],
})
export class RestLogModule {}
