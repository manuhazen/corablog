import { Body, Controller, Get, Query, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Prisma, Post as BlogPost } from '@prisma/client';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  // Get all posts with the getAllPosts method from the BlogService class
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

  // Get a single post by ID with the getPostById method from
  // the BlogService class
  @Get('/:postId')
  async getPostById(
    @Query('postId')
    postId: string
  ): Promise<BlogPost | null> {
    return this.blogService.getPostById(postId);
  }

  // Create a new post with the createPost method from the BlogService class with post method
  @Post()
  async createPost(@Body() data: Prisma.PostCreateInput): Promise<BlogPost> {
    return this.blogService.createPost(data);
  }
}
