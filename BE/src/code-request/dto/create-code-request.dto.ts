import { Prisma } from '@prisma/client';

export type CreateCodeRequestDto = Prisma.CodeRequestCreateInput & {
  skills: number[];
};
