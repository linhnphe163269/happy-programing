import { Injectable } from '@nestjs/common';
import { CreateMenteeDto } from './dto/create-mentee.dto';
import { UpdateMenteeDto } from './dto/update-mentee.dto';

@Injectable()
export class MenteeService {
  create(createMenteeDto: CreateMenteeDto) {
    return 'This action adds a new mentee';
  }

  findAll() {
    return `This action returns all mentee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mentee`;
  }

  update(id: number, updateMenteeDto: UpdateMenteeDto) {
    return `This action updates a #${id} mentee`;
  }

  remove(id: number) {
    return `This action removes a #${id} mentee`;
  }
}
