import { Role } from '@prisma/client';

export class JwtPayload {
  userId: number;
  username: string;
  roles: Role[];
}
