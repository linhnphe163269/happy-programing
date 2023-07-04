import { Injectable } from '@nestjs/common';
import { UpdateCoderequestDto } from './dto/update-coderequest.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CoderequestsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCoderequestDto: Prisma.coderequestCreateInput) {
    const newCodeRequest = await this.prisma.coderequest.create({
      data: createCoderequestDto,
    });
    return newCodeRequest;
  }

  findAll() {
    return `This action returns all coderequests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coderequest`;
  }

  update(id: number, updateCoderequestDto: UpdateCoderequestDto) {
    return `This action updates a #${id} coderequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} coderequest`;
  }
}
