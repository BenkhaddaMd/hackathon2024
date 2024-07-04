import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Application } from './entity/application.entity';
import { CreateApplicationDto } from './dto/application.dto';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(Application)
    private readonly applicationRepository: Repository<Application>,
  ) {}

  async create(createApplicationDto: CreateApplicationDto): Promise<Application> {
    const { userId, offerId } = createApplicationDto;

    const application = this.applicationRepository.create({
      user: { id: userId },
      offer: { id: offerId },
    });

    return await this.applicationRepository.save(application);
  }

  async findByUserId(userId: string): Promise<Application[]> {
    return await this.applicationRepository.find({
      where: {
        user: { id: userId },
      },
      relations: ['offer'],
    });
  }
}
