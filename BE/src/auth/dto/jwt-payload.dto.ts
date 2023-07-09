import { Role } from '@prisma/client';

export class JwtPayloadDto {
  userId: number;
  username: string;
  roles: Role[];
}
