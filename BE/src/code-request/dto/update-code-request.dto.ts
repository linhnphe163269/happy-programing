import { PartialType } from '@nestjs/mapped-types';
import { CreateCodeRequestDto } from './create-code-request.dto';

export class UpdateCodeRequestDto extends PartialType(CreateCodeRequestDto) {}
