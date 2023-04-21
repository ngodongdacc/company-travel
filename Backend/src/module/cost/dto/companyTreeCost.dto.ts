import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { CompanyDto } from '../../../module/company/dto/company.dto';
import { CompanyTreeDto } from './company-tree.dto';

export class CompanyTreeCostDto extends CompanyDto {
  @ApiProperty({
    required: true,
  })
  @IsOptional()
  cost: number = 0;

  @ApiProperty({
    required: true,
    type: [CompanyTreeDto],
    examples: [
      {
        id: 'string',
        name: 'string',
        parentId: 'string',
        cost: 0,
        children: [],
      },
    ],
  })
  children: CompanyTreeCostDto[];
}
