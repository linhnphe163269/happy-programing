import { Prisma } from '@prisma/client';

export type UpdateCodeRequestDto = Prisma.CodeRequestUpdateInput & {
  skills?: number[];
};
