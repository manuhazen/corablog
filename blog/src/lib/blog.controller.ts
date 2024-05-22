import { Body, Controller, Get, Query, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Prisma, Post as BlogPost } from '@prisma/client';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Get()
  async getAllPosts(
    @Query()
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.PostWhereUniqueInput;
      where?: Prisma.PostWhereInput;
      orderBy?: Prisma.PostOrderByWithRelationInput;
    }
  ): Promise<BlogPost[]> {
    return this.blogService.getAllPosts(params);
  }

  @Get('pages')
  async getTotalPages(
    @Query('itemsPerPage') itemsPerPage: number
  ): Promise<number> {
    const totalItems = await this.blogService.countPosts();
    return Math.ceil(totalItems / itemsPerPage);
  }

  @Get('/:postId')
  async getPostById(
    @Query('postId')
    postId: string
  ): Promise<BlogPost | null> {
    return this.blogService.getPostById(postId);
  }

  @Post()
  async createPost(@Body() data: Prisma.PostCreateInput): Promise<BlogPost> {
    return this.blogService.createPost(data);
  }
}
