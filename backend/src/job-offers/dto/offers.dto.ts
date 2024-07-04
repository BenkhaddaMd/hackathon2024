import { IsNotEmpty, IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateJobOfferDto {
  @IsNotEmpty({
    message: 'Title is required',
  })
  title: string;

  @IsNotEmpty({
    message: 'Description is required',
  })
  description: string;

  @IsNotEmpty({
    message: 'Budget is required',
  })
  @IsNumber({}, {
    message: 'Budget must be a number',
  })
  budget: number;

  @IsNotEmpty({
    message: 'Deadline is required',
  })
  @IsDateString({}, {
    message: 'Deadline must be a valid date',
  })
  deadline: string;

  @IsNotEmpty({
    message: 'Skills are required',
  })
  skills: string;

  @IsNotEmpty({
    message: 'User ID is required',
  })
  userId: string;
}
