import { Test, TestingModule } from '@nestjs/testing';
import { RestLogService } from './restlog.service';

describe('RestLogService', () => {
  let service: RestLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestLogService],
    }).compile();

    service = module.get<RestLogService>(RestLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
