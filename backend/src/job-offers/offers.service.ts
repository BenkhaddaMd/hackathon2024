import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Offer } from './entity/offers.entity';
import { CreateJobOfferDto } from './dto/offers.dto';
import { Application } from 'src/applications/entity/application.entity';
import { User } from 'src/users/entity/users.entity';

@Injectable()
export class OffersService {
  constructor(
    @InjectRepository(Offer)
    private readonly offerRepository: Repository<Offer>,
    @InjectRepository(Application)
    private readonly applicationRepository: Repository<Application>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createJobOfferDto: CreateJobOfferDto): Promise<Offer> {
    const jobOffer = this.offerRepository.create(createJobOfferDto);
    return this.offerRepository.save(jobOffer);
  }

  async findAll(): Promise<Offer[]> {
    return this.offerRepository.find();
  }

  async findOne(offerId: string): Promise<Offer> {
    return this.offerRepository.findOne({
      where: {id: offerId}
    });
  }

  async findByUserId(userId: string): Promise<Offer[]> {
    return await this.offerRepository.find({
      where: { userId },
    });
  }

  async findOneWithApplications(offerId: string): Promise<Offer> {
    return this.offerRepository.findOne({
      where: { id: offerId },
      relations: ['applications', 'applications.user'],
    });
  }

  async findUsersByOfferId(offerId: string): Promise<User[]> {
    const applications = await this.applicationRepository.find({
      where: { offer: { id: offerId } },
      relations: ['user'],
    });

    return applications.map(application => application.user);
  }


}
