import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoderequestService } from './coderequest.service';
import { CreateCoderequestDto } from './dto/create-coderequest.dto';
import { UpdateCoderequestDto } from './dto/update-coderequest.dto';

@Controller('coderequest')
export class CoderequestController {
  constructor(private readonly coderequestService: CoderequestService) {}

  @Post()
  create(@Body() createCoderequestDto: CreateCoderequestDto) {
    return this.coderequestService.create(createCoderequestDto);
  }

  @Get()
  findAll() {
    return this.coderequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coderequestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoderequestDto: UpdateCoderequestDto){
    return this.coderequestService.update(+id, updateCoderequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coderequestService.remove(+id);
  }


  @Post('/my-statistic')
  getAllCodeRequestsByMenteeId(@Body() requestBody: { menteeId: number }) {
    const { menteeId } = requestBody;
    return this.coderequestService.getAllCodeRequestsByMenteeId(menteeId);
  }
}
