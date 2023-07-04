import { Test, TestingModule } from '@nestjs/testing';
import { CoderequestsService } from './coderequests.service';

describe('CoderequestsService', () => {
  let service: CoderequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoderequestsService],
    }).compile();

    service = module.get<CoderequestsService>(CoderequestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
