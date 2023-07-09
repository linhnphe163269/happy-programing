import { Injectable } from '@nestjs/common';
import { CreateMenteeDto } from './dto/create-mentee.dto';
import { UpdateMenteeDto } from './dto/update-mentee.dto';
import { JwtPayloadDto } from 'src/auth/dto/jwt-payload.dto';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MenteesService {
  constructor(private prisma: PrismaService) {}

  create(createMenteeDto: CreateMenteeDto) {
    return 'This action adds a new mentee';
  }

  findAll() {
    return `This action returns all mentees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mentee`;
  }

  async update(user: JwtPayloadDto, updateMenteeDto: UpdateMenteeDto) {
    const updatedMentee = await this.prisma.mentee.update({
      where: {
        userId: user.userId,
      },
      data: updateMenteeDto,
    });
    return `This action updates a #${user.userId} mentee`;
  }

  remove(id: number) {
    return `This action removes a #${id} mentee`;
  }
}
