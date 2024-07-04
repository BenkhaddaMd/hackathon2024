import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entity/post.entity';
import { CreatePostDto } from './dto/post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const { title, description, skills, experiences, userId } = createPostDto;
    const post = this.postRepository.create({
      title,
      description,
      skills: skills.split(',').map(skill => skill.trim()),
      experiences,
      userId,
    });
    return await this.postRepository.save(post);
  }

  async findAll(): Promise<Post[]> {
    return await this.postRepository.find();
  }

  async findByUserId(userId: string): Promise<Post[]> {
    return await this.postRepository.find({
      where: { userId },
    });
  }
}
