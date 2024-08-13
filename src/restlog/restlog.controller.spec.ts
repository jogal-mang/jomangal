import { Test, TestingModule } from '@nestjs/testing';
import { RestLogController } from './restlog.controller';

describe('RestLogController', () => {
  let controller: RestLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestLogController],
    }).compile();

    controller = module.get<RestLogController>(RestLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
