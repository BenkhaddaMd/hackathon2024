import { IsNotEmpty } from 'class-validator';

export class CreateApplicationDto {
  @IsNotEmpty({ message: 'Offer ID is required' })
  offerId: string;

  @IsNotEmpty({ message: 'User ID is required' })
  userId: string;
}
