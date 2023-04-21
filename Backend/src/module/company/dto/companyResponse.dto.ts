import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { ResponseDto } from 'src/common/dto/response.dto';
import { CompanyDto } from './company.dto';

export class CompanyResponseDto extends ResponseDto {
  @ApiProperty({
    required: true,
    type: [CompanyDto],
  })
  @IsOptional()
  data: CompanyDto[];
}
