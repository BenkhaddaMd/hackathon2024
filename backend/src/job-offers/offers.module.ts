import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OffersController } from './offers.controller';
import { OffersService } from './offers.service';
import { Offer } from './entity/offers.entity';
import { HttpModule } from '@nestjs/axios';
import { Application } from 'src/applications/entity/application.entity';
import { User } from 'src/users/entity/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Offer, Application, User]), HttpModule],
  controllers: [OffersController],
  providers: [OffersService],
  exports: [OffersService],
})
export class OffersModule {}
