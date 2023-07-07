import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';
import * as argon2 from 'argon2';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    const hashedPassword = await argon2.hash(createUserDto.password);
    const newUser = await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });
    return newUser;
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async findUser(username: string) {
    const user = this.prisma.user.findUnique({
      where: {
        username,
      },
    });
    return user;
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  }

  async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    if (updateUserDto.password) {
      updateUserDto.password = await argon2.hash(
        updateUserDto.password as string,
      );
    }
    const updatedUser = await this.prisma.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    const deletedUser = await this.prisma.user.delete({
      where: {
        id,
      },
    });
    return `This action removes a #${id} user`;
  }
}
