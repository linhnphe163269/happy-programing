import { Injectable } from '@nestjs/common';
import { UpdateCodeRequestDto } from './dto/update-code-request.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma, User } from '@prisma/client';
import { JwtPayload } from 'src/auth/jwt-payload';

@Injectable()
export class CodeRequestService {
  constructor(private prisma: PrismaService) {}

  async create(mentee: User, createCodeRequestDto: any) {
    const { mentorId, skills, ...payload } = createCodeRequestDto;

    const skillIds = skills.map((skillId: number) => ({
      Skill: {
        connect: {
          id: skillId,
        },
      },
    }));

    const newCodeRequest = await this.prisma.codeRequest.create({
      data: {
        ...payload,
        Mentee: {
          connect: {
            username: mentee.username,
          },
        },
        Mentor: {
          connect: {
            id: mentorId,
          },
        },
        CodeRequestSkill: {
          create: skillIds,
        },
      },
    });
    return newCodeRequest;
  }

  async findMyRequest(user: JwtPayload) {
    const myRequests = this.prisma.codeRequest.findMany({
      where: {
        OR: [
          {
            menteeId: user.userId,
          },
          {
            mentorId: user.userId,
          },
        ],
      },
      include: {
        CodeRequestSkill: {
          select: {
            Skill: true,
          },
        },
      },
    });
    return myRequests;
  }

  async findAll() {
    const codeRequests = await this.prisma.codeRequest.findMany();
    return codeRequests;
  }

  async findOne(id: number) {
    const codeRequest = await this.prisma.codeRequest.findUnique({
      where: {
        id,
      },
      include: {
        CodeRequestSkill: {
          select: {
            Skill: true,
          },
        },
      },
    });
    return codeRequest;
  }

  update(id: number, updateCodeRequestDto: UpdateCodeRequestDto) {
    return `This action updates a #${id} codeRequest`;
  }

  async remove(id: number) {
    const deletedCodeRequest = await this.prisma.codeRequest.delete({
      where: {
        id,
      },
    });
    return `This action removes a #${id} codeRequest`;
  }
}
