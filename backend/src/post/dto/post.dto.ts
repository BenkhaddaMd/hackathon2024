import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty({ message: 'Title of post is required' })
  title: string;

  @IsNotEmpty({ message: 'Description is required' })
  description: string;

  @IsNotEmpty({ message: 'Skills are required' })
  skills: string;

  @IsNotEmpty({ message: 'Experiences are required' })
  experiences: string;

  @IsNotEmpty({ message: 'User ID is required' })
  userId: string;
}
