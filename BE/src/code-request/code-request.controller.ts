import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { CodeRequestService } from './code-request.service';
import { CreateCodeRequestDto } from './dto/create-code-request.dto';
import { UpdateCodeRequestDto } from './dto/update-code-request.dto';
import { Prisma, Role, User } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';
import { JwtPayloadDto } from 'src/auth/dto/jwt-payload.dto';
import { CreateHireRequestDto } from './dto/create-hire-request.dto';

@Controller('code-request')
export class CodeRequestController {
  constructor(private readonly codeRequestService: CodeRequestService) {}

  @Roles(Role.MENTEE)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  create(@Request() req, @Body() createCodeRequestDto: CreateCodeRequestDto) {
    return this.codeRequestService.create(
      req.user as JwtPayloadDto,
      createCodeRequestDto,
    );
  }

  @Roles(Role.MENTEE)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('inviting')
  invite(@Request() req, @Body() createHireRequestDto: CreateHireRequestDto) {
    return this.codeRequestService.invite(
      req.user as JwtPayloadDto,
      createHireRequestDto,
    );
  }

  @Roles(Role.MENTEE)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('inviting')
  getInvite(@Request() req) {
    return this.codeRequestService.getInvite(req.user);
  }

  @Roles(Role.MENTOR)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('following')
  follow(@Request() req, @Body() followDto) {
    return this.codeRequestService.follow(req.user, followDto);
  }

  @Roles(Role.MENTOR)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('following')
  getFollow(@Request() req) {
    return this.codeRequestService.getFollow(req.user);
  }

  @Roles(Role.MENTEE, Role.MENTOR)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('me')
  findMyRequest(@Request() req) {
    return this.codeRequestService.findMyRequest(req.user as JwtPayloadDto);
  }

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  findAll() {
    return this.codeRequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.codeRequestService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCodeRequestDto: UpdateCodeRequestDto,
  ) {
    return this.codeRequestService.update(+id, updateCodeRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.codeRequestService.remove(+id);
  }
}
