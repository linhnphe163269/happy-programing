import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as argon2 from 'argon2';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  getAccessToken(user: User) {
    const payload = { username: user.username, sub: user.id, roles: user.role };
    return this.jwtService.sign(payload);
  }

  async validateUser(username: string, password: string) {
    const user = await this.usersService.findUser(username);
    if (user && (await argon2.verify(user.password, password))) {
      const { password, ...rest } = user;
      return rest;
    }
    return null;
  }

  async register(registerPayload: Prisma.UserCreateInput) {
    const user = await this.usersService.create(registerPayload);
    const token = this.getAccessToken(user);
    return {
      access_token: token,
    };
  }

  async login(user: any) {
    const token = this.getAccessToken(user);
    return {
      access_token: token,
    };
  }
}
