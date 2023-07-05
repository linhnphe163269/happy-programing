import { IsString, IsOptional, IsDate, IsNumber, IsDateString } from 'class-validator';
import { Transform, Type, plainToClass } from 'class-transformer';

export class UpdateCoderequestDto {

    @IsNumber()
    menteeid: number;

    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    content?: string;

    @IsOptional()
    @IsDateString()
    @Type(() => Date)
    deadline?: Date;

    @IsOptional()
    @IsNumber()
    skillid?: number;
}
