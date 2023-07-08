import { Injectable } from '@nestjs/common';
import { CreateMentorDto } from './dto/create-mentor.dto';
import { UpdateMentorDto } from './dto/update-mentor.dto';
import { PrismaService } from 'src/prisma.service';
import { coderequest } from '@prisma/client';

@Injectable()
export class MentorService {

  constructor(private readonly prisma: PrismaService) { }
  create(createMentorDto: CreateMentorDto) {
    return 'This action adds a new mentor';
  }

  findAll() {
    return `This action returns all mentor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mentor`;
  }

  update(id: number, updateMentorDto: UpdateMentorDto) {
    return `This action updates a #${id} mentor`;
  }

  remove(id: number) {
    return `This action removes a #${id} mentor`;
  }

  async getAllCodeRequestsByMentorId(mentorId: number): Promise<{ result: coderequest[] }> {
    const mentorCodeRequestIds = await this.prisma.mentorcoderequest.findMany({
      where: {
        mentorid: mentorId,
      },
      select: {
        coderequestid: true,
      },
    }).then(mentorCodeRequests => mentorCodeRequests.map(item => item.coderequestid));

    const result = await this.prisma.coderequest.findMany({
      where: {
        id: { in: mentorCodeRequestIds },
      },
    });

    return { result };
  }


}
