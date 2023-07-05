import { PartialType } from '@nestjs/mapped-types';
import { CreateMenteeDto } from './create-mentee.dto';

export class UpdateMenteeDto extends PartialType(CreateMenteeDto) {}
