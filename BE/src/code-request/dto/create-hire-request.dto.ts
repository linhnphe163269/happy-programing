import { Prisma } from '@prisma/client';

export type CreateHireRequestDto = Prisma.HireRequestCreateInput & {
  codeRequestId: number;
  mentorId: number;
};
