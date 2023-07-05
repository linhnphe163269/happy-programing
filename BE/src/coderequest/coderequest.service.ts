import { Injectable } from '@nestjs/common';
import { CreateCoderequestDto } from './dto/create-coderequest.dto';
import { UpdateCoderequestDto } from './dto/update-coderequest.dto';
import { PrismaService } from 'src/prisma.service';
import { coderequest } from '@prisma/client';

@Injectable()
export class CoderequestService {
  constructor(private readonly prisma: PrismaService) { }


  create(createCoderequestDto: CreateCoderequestDto) {
    return 'This action adds a new coderequest';
  }

  findAll() {
    return `This action returns all coderequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coderequest`;
  }

  async update(id: number, updateCoderequestDto: UpdateCoderequestDto):Promise<void> {
    const { title, content, deadline, skillid } = updateCoderequestDto;
    
    const data = {};

    if (title) {
      data['title'] = title;
    }

    if (content) {
      data['content'] = content;
    }

    if (deadline) {
      data['deadline'] = new Date(deadline);
    }

    if (skillid) {
      
      const a= await this.prisma.coderequestskill.deleteMany({
        where: { coderequestid: id },
      });
      
      const b= await this.prisma.coderequestskill.createMany({
        data: [{ coderequestid: id, skillid: skillid }],
      });

    }
    
    await this.prisma.coderequest.update({
      where:{id},
      data:data,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} coderequest`;
  }

  async getAllCodeRequestsByMenteeId(menteeId: number): Promise<{ result: coderequest[], totalCount: number, totalMentor: number }> {
    const result = await this.prisma.coderequest.findMany({ where: { menteeID: menteeId } });
    const totalCount = await this.prisma.coderequest.count({ where: { menteeID: menteeId } });
  
    const mentorCodeRequestIds = result.map(codeRequest => codeRequest.id);
    
    const mentorIds = await this.prisma.mentorcoderequest.findMany({
      where: {
        coderequestid: { in: mentorCodeRequestIds },
      },
      select: {
        mentorid: true,
      },
    });
    
    const uniqueMentorCount = new Set(mentorIds.map(mentor => mentor.mentorid)).size;
    
    return { result, totalCount, totalMentor: uniqueMentorCount };
  }
  




  
  

}
