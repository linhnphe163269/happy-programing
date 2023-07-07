import { Module } from '@nestjs/common';
import { CodeRequestService } from './code-request.service';
import { CodeRequestController } from './code-request.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CodeRequestController],
  providers: [CodeRequestService, PrismaService],
})
export class CodeRequestModule {}
