import { Module } from '@nestjs/common';
import { MenteesService } from './mentees.service';
import { MenteesController } from './mentees.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MenteesController],
  providers: [MenteesService, PrismaService],
})
export class MenteesModule {}
