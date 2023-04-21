import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { ResponseDto } from 'src/common/dto/response.dto';
import { TravelDto } from './travel.dto';

export class TravelResponseDto extends ResponseDto {
  @ApiProperty({
    required: true,
    type: [TravelDto],
  })
  @IsOptional()
  data: TravelDto[];
}
