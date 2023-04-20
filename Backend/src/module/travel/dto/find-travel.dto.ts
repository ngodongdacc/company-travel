import { ApiProperty } from '@nestjs/swagger';
import { FindDto } from '../../../common/dto/find.dto';
import { IsOptional } from 'class-validator';

export class FindTravelDto extends FindDto {
  @ApiProperty({
    required: false,
    description: 'Search by field',
  })
  @IsOptional()
  search?: string;

  @ApiProperty({
    required: false,
    default: 'employeeName',
    description: 'Search field',
  })
  @IsOptional()
  field?: string = 'employeeName';
}
