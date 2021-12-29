import { Test, TestingModule } from '@nestjs/testing';
import { FlagsmithService } from './flagsmith.service';

describe('FlagsmithService', () => {
  let service: FlagsmithService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlagsmithService],
    }).compile();

    service = module.get<FlagsmithService>(FlagsmithService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
