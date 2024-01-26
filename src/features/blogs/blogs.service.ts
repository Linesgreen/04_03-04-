import { BlogCreateType, BlogUpdateType } from './types/input';
import { BlogsDb } from './types/output';
import { BlogsRepository } from './repositories/blogs.repository';
import { BLogMapper } from './repositories/utils/blogMapper';
import { Injectable } from '@nestjs/common';
@Injectable()
export class BlogsService {
  constructor(protected blogsRepository: BlogsRepository) {}

  async createBlog(blogData: BlogCreateType) {
    const newBlog = new BlogsDb(
      blogData.name,
      blogData.description,
      blogData.websiteUrl,
    );

    await this.blogsRepository.addBlog(newBlog);
    return BLogMapper(newBlog);
  }

  async updateBlog(newData: BlogUpdateType, blogId: string) {
    return await this.blogsRepository.updateBlog(newData, blogId);
  }

  async deleteBlog(blogId: string) {
    return await this.blogsRepository.deleteBlog(blogId);
  }
}