import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RestLog } from './restlog.entity';

@Injectable()
export class RestLogService {
  constructor(
    @InjectRepository(RestLog)
    private restLogRepository: Repository<RestLog>,
  ) {}

  async create(restLogDto: { restId: string, startTime: string }) {
    const restLog = this.restLogRepository.create(restLogDto);
    return this.restLogRepository.save(restLog);
  }

  async findAll() {
    return this.restLogRepository.find();
  }
}
