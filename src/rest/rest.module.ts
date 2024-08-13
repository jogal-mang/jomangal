import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestService } from './rest.service';
import { RestController } from './rest.controller';
import { Rest } from './rest.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rest])],
  providers: [RestService],
  controllers: [RestController],
})
export class RestModule {}
