import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenteeService } from './mentee.service';
import { CreateMenteeDto } from './dto/create-mentee.dto';
import { UpdateMenteeDto } from './dto/update-mentee.dto';

@Controller('mentee')
export class MenteeController {
  constructor(private readonly menteeService: MenteeService) {}

  @Post()
  create(@Body() createMenteeDto: CreateMenteeDto) {
    return this.menteeService.create(createMenteeDto);
  }

  @Get()
  findAll() {
    return this.menteeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menteeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenteeDto: UpdateMenteeDto) {
    return this.menteeService.update(+id, updateMenteeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menteeService.remove(+id);
  }
}
