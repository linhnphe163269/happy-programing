import { Test, TestingModule } from '@nestjs/testing';
import { CoderequestsController } from './coderequests.controller';
import { CoderequestsService } from './coderequests.service';

describe('CoderequestsController', () => {
  let controller: CoderequestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoderequestsController],
      providers: [CoderequestsService],
    }).compile();

    controller = module.get<CoderequestsController>(CoderequestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
