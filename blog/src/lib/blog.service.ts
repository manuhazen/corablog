import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Post, Prisma } from '@prisma/client';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}

  async getAllPosts(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PostWhereUniqueInput;
    where?: Prisma.PostWhereInput;
    orderBy?: Prisma.PostOrderByWithRelationInput;
  }): Promise<Post[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.post.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async getPostById(postId: string): Promise<Post | null> {
    console.log('postId', postId);
    return this.prisma.post.findFirstOrThrow({
      where: {
        id: postId,
      },
    });
  }

  async createPost(data: Prisma.PostCreateInput): Promise<Post> {
    return this.prisma.post.create({ data });
  }
}
