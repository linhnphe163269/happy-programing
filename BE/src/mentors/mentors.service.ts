import { Injectable } from '@nestjs/common';
import { CreateMentorDto } from './dto/create-mentor.dto';
import { UpdateMentorDto } from './dto/update-mentor.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MentorsService {
  constructor(private prisma: PrismaService) {}

  create(createMentorDto: CreateMentorDto) {
    return 'This action adds a new mentor';
  }

  async findAll() {
    const mentors = await this.prisma.mentor.findMany({
      include: {
        User: true,
      },
    });

    return mentors;
  }

  async findOne(id: number) {
    const mentor = await this.prisma.mentor.findUnique({
      where: {
        id,
      },
    });
    return mentor;
  }

  update(id: number, updateMentorDto: UpdateMentorDto) {
    return `This action updates a #${id} mentor`;
  }

  remove(id: number) {
    return `This action removes a #${id} mentor`;
  }
}
