import { Module } from '@nestjs/common';
import { CoderequestService } from './coderequest.service';
import { CoderequestController } from './coderequest.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CoderequestController],
  providers: [CoderequestService,PrismaService]
})
export class CoderequestModule {}
