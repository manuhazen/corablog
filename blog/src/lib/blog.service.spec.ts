import { Test } from '@nestjs/testing';
import { BlogService } from './blog.service';

describe('BlogService', () => {
  let service: BlogService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BlogService],
    }).compile();

    service = module.get(BlogService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
