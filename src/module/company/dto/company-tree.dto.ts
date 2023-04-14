import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { CompanyDto } from './company.dto';

export class CompanyTreeDto extends CompanyDto {
  @ApiProperty({
    required: true,
  })
  @IsOptional()
  children: CompanyDto[] = [];
}
