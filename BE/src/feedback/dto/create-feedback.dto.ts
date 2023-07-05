import { IsNumber, IsString, Min, Max } from 'class-validator';

export class CreateFeedbackDto {
    

  @IsNumber()
  menteeid: number;

  @IsNumber()
  mentorid: number;

  @IsNumber()
  @Min(1)
  @Max(5)
  star: number;

  @IsString()
  comment: string;

}
