import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async getPosts(): Promise<Post[]> {
    return await this.prisma.post.findMany();
  }
  async getAPost(id: number): Promise<Post | null> {
    return await this.prisma.post.findUnique({
      where: {
        id: id,
      },
    });
  }
}
