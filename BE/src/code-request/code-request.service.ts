import { Injectable } from '@nestjs/common';
import { UpdateCodeRequestDto } from './dto/update-code-request.dto';
import { PrismaService } from 'src/prisma.service';
import { JwtPayloadDto } from 'src/auth/dto/jwt-payload.dto';
import { CreateCodeRequestDto } from './dto/create-code-request.dto';
import { CreateHireRequestDto } from './dto/create-hire-request.dto';
import { RequestStatus } from '@prisma/client';

@Injectable()
export class CodeRequestService {
  constructor(private prisma: PrismaService) {}

  async create(
    user: JwtPayloadDto,
    createCodeRequestDto: CreateCodeRequestDto,
  ) {
    const { skills, ...payload } = createCodeRequestDto;

    let skillIds = [];

    if (skills) {
      skillIds = skills.map((skillId: number) => ({
        Skill: {
          connect: {
            id: skillId,
          },
        },
      }));
    }

    const newCodeRequest = await this.prisma.codeRequest.create({
      data: {
        ...payload,
        Mentee: {
          connect: {
            userId: user.userId,
          },
        },
        CodeRequestSkill: {
          create: skillIds,
        },
      },
    });
    return newCodeRequest;
  }

  async invite(user: JwtPayloadDto, createHireRequest: CreateHireRequestDto) {
    const { mentorId, codeRequestId, ...payload } = createHireRequest;
    const newInvite = await this.prisma.$transaction(async (tx) => {
      const invitedHireRequest = await tx.hireRequest.create({
        data: {
          ...payload,
          CodeRequest: {
            connect: {
              id: codeRequestId,
            },
          },
          Mentor: {
            connect: {
              id: mentorId,
            },
          },
        },
      });

      const updatedStatusCodeRequest = this.update(codeRequestId, {
        status: RequestStatus.PROCESSING,
      });

      return invitedHireRequest;
    });
    return newInvite;
  }

  async getInvite(user: JwtPayloadDto) {
    const invites = await this.prisma.hireRequest.findMany({
      where: {
        CodeRequest: {
          Mentee: {
            userId: user.userId,
          },
        },
      },
    });
    return invites;
  }

  async getFollow(user: JwtPayloadDto) {
    const follows = await this.prisma.hireRequest.findMany({
      where: {
        Mentor: {
          userId: user.userId,
        },
      },
    });
    return follows;
  }

  async follow(user: JwtPayloadDto, followDto) {}

  async findMyRequest(user: JwtPayloadDto) {
    const myRequests = this.prisma.codeRequest.findMany({
      where: {
        Mentee: {
          userId: user.userId,
        },
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

  async update(id: number, updateCodeRequestDto: UpdateCodeRequestDto) {
    const { skills, ...payload } = updateCodeRequestDto;
    // const skillIds = skills.map((skillId: number) => ({
    //   Skill: {
    //     connect: {
    //       id: skillId,
    //     },
    //   },
    // }));

    const updateCodeRequest = await this.prisma.codeRequest.update({
      data: {
        ...payload,
      },
      where: {
        id,
      },
    });
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
