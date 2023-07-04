import { Module } from '@nestjs/common';
import { CoderequestsService } from './coderequests.service';
import { CoderequestsController } from './coderequests.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CoderequestsController],
  providers: [CoderequestsService, PrismaService]
})
export class CoderequestsModule {}
