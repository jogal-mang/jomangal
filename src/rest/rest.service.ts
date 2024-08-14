import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rest } from './rest.entity';

@Injectable()
export class RestService {
  constructor(
    @InjectRepository(Rest)
    private restRepository: Repository<Rest>,
  ) {}

  async create(restDto: { name: string, restId: string, duration: number }) {
    const rest = this.restRepository.create(restDto);
    return this.restRepository.save(rest);
  }

  async findAll() {
    return this.restRepository.find();
  }

  async findOneById(id: number) {
    return this.restRepository.findOne({ where: { id } });
  }
}
