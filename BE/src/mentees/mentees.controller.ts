import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Request,
} from '@nestjs/common';
import { MenteesService } from './mentees.service';
import { CreateMenteeDto } from './dto/create-mentee.dto';
import { UpdateMenteeDto } from './dto/update-mentee.dto';
import { JwtPayloadDto } from 'src/auth/dto/jwt-payload.dto';

@Controller('mentees')
export class MenteesController {
  constructor(private readonly menteesService: MenteesService) {}

  @Post()
  create(@Body() createMenteeDto: CreateMenteeDto) {
    return this.menteesService.create(createMenteeDto);
  }

  @Get()
  findAll() {
    return this.menteesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menteesService.findOne(+id);
  }

  @Put(':id')
  update(@Request() req, @Body() updateMenteeDto: UpdateMenteeDto) {
    return this.menteesService.update(
      req.user as JwtPayloadDto,
      updateMenteeDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menteesService.remove(+id);
  }
}
