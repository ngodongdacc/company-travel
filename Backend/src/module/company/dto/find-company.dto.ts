import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { FindDto } from '../../../common/dto/find.dto';

export class FindCompanyDto extends FindDto {
  @ApiProperty({
    required: false,
    description: 'Search by name',
  })
  @IsOptional()
  name?: string;

  @ApiProperty({
    required: false,
    description: 'Search by parentId',
  })
  @IsOptional()
  parentId?: string;
}
