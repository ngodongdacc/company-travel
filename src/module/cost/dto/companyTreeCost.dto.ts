import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { CompanyTreeDto } from '../../company/dto/company-tree.dto';

export class CompanyTreeCostDto extends CompanyTreeDto {
  @ApiProperty({
    required: true,
  })
  @IsOptional()
  cost: number = 0;

  @ApiProperty({
    required: true,
  })
  @IsOptional()
  children: CompanyTreeCostDto[] = [];
}
