import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { PrismaService } from 'src/prisma.service';
import { feedback } from '@prisma/client';

@Injectable()
export class FeedbackService {

  constructor(private readonly prisma: PrismaService) { }

  // create(createFeedbackDto: CreateFeedbackDto) {
  //   return 'This action adds a new feedback';
  // }
  async create(createFeedbackDto: CreateFeedbackDto): Promise<feedback> {
    return this.prisma.feedback.create({ data: createFeedbackDto });
  }
  

  findAll() {
    return `This action returns all feedback`;
  }

  findOne(id: number) {
    return `This action returns a #${id} feedback`;
  }

  update(id: number, updateFeedbackDto: UpdateFeedbackDto) {
    return `This action updates a #${id} feedback`;
  }

  remove(id: number) {
    return `This action removes a #${id} feedback`;
  }
}
