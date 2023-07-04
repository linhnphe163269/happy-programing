import { PartialType } from '@nestjs/mapped-types';
import { CreateCoderequestDto } from './create-coderequest.dto';

export class UpdateCoderequestDto extends PartialType(CreateCoderequestDto) {}
