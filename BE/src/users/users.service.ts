import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, Role } from '@prisma/client';
import * as argon2 from 'argon2';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    const hashedPassword = await argon2.hash(createUserDto.password);

    const user = await this.prisma.$transaction(async (tx) => {
      const newUser = await tx.user.create({
        data: {
          ...createUserDto,
          password: hashedPassword,
        },
      });

      const userRole = newUser.role.toLowerCase();
      await tx[userRole].create({
        data: {
          User: {
            connect: {
              id: newUser.id,
            },
          },
        },
      });

      return newUser;
    });

    return user;
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
