import { Controller, Post, Body, Get, Param, ParseIntPipe, ParseUUIDPipe } from '@nestjs/common';
import { ApplicationsService } from './application.service';
import { CreateApplicationDto } from './dto/application.dto';
import { Application } from './entity/application.entity';

@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Post()
  async create(@Body() createApplicationDto: CreateApplicationDto): Promise<Application> {
    return this.applicationsService.create(createApplicationDto);
  }

  @Get('user/:userId')
  async findByUserId(@Param('userId', ParseUUIDPipe) userId: string): Promise<Application[]> {
    return this.applicationsService.findByUserId(userId);
  }

}
