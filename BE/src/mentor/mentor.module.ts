import { Module } from '@nestjs/common';
import { MentorService } from './mentor.service';
import { MentorController } from './mentor.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MentorController],
  providers: [MentorService,PrismaService]
})
export class MentorModule {}
