import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SkillsService {
  constructor(private prisma: PrismaService) {}

  async create(createSkillDto: Prisma.SkillCreateInput) {
    const newSkill = await this.prisma.skill.create({
      data: createSkillDto,
    });
    return newSkill;
  }

  async findAll() {
    const skills = await this.prisma.skill.findMany();
    return skills;
  }

  async findOne(id: number) {
    const skill = await this.prisma.skill.findUnique({
      where: {
        id,
      },
    });
    return skill;
  }

  async update(id: number, updateSkillDto: Prisma.SkillUpdateInput) {
    const updatedSkill = await this.prisma.skill.update({
      where: {
        id,
      },
      data: updateSkillDto,
    });
    return `This action updates a #${id} skill`;
  }

  async remove(id: number) {
    const deletedSkill = await this.prisma.skill.delete({
      where: {
        id,
      },
    });
    return `This action removes a #${id} skill`;
  }
}
