import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { OffersService } from './offers.service';
import { CreateJobOfferDto } from './dto/offers.dto';
import { Offer } from './entity/offers.entity';
import { User } from 'src/users/entity/users.entity';

@Controller('offers')
export class OffersController {
  constructor(private readonly jobOffersService: OffersService) {}

  @Post()
  create(@Body() createJobOfferDto: CreateJobOfferDto) {
    return this.jobOffersService.create(createJobOfferDto);
  }

  @Get()
  async findAll(): Promise<Offer[]> {
    return this.jobOffersService.findAll();
  }

  @Get(':offerId')
  async findOne(@Param('offerId') offerId: string): Promise<Offer> {
    return this.jobOffersService.findOne(offerId);
  }

  @Get('user/:userId')
  async findByUserId(@Param('userId') userId: string): Promise<Offer[]> {
    return this.jobOffersService.findByUserId(userId);
  }

  @Get(':offerId/users')
  async findUsersByOfferId(@Param('offerId') offerId: string): Promise<User[]> {
    return this.jobOffersService.findUsersByOfferId(offerId);
  }
}
