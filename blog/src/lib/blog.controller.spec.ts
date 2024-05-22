import { Test } from '@nestjs/testing';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';

describe('BlogController', () => {
  let controller: BlogController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BlogService],
      controllers: [BlogController],
    }).compile();

    controller = module.get(BlogController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
