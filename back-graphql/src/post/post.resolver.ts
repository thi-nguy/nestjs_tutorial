import { Args, Query, Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';

@Resolver()
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query('posts')
  async getAll() {
    return await this.postService.getPosts();
  }

  @Query('post')
  async getOne(@Args('id') id: string) {
    return await this.postService.getAPost(+id);
  }
}
