import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { ResponseDto } from 'src/common/dto/response.dto';
import { CompanyTreeCostDto } from './companyTreeCost.dto';

export class CompanyTreeCostResponseDto extends ResponseDto {
  @ApiProperty({
    required: true,
    type: [CompanyTreeCostDto],
  })
  @IsOptional()
  data: CompanyTreeCostDto[];
}
