import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoderequestsService } from './coderequests.service';
import { CreateCoderequestDto } from './dto/create-coderequest.dto';
import { UpdateCoderequestDto } from './dto/update-coderequest.dto';

@Controller('coderequests')
export class CoderequestsController {
  constructor(private readonly coderequestsService: CoderequestsService) {}

  @Post()
  create(@Body() createCoderequestDto: CreateCoderequestDto) {
    return this.coderequestsService.create(createCoderequestDto);
  }

  @Get()
  findAll() {
    return this.coderequestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coderequestsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoderequestDto: UpdateCoderequestDto) {
    return this.coderequestsService.update(+id, updateCoderequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coderequestsService.remove(+id);
  }
}
