import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  getPosts() {
    return 'This is a post';
  }
}
