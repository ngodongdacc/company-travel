import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class CompanyDto {
  @ApiProperty({
    required: true,
  })
  @IsOptional()
  id: string;

  @ApiProperty({
    required: true,
  })
  @IsOptional()
  name: string;

  @ApiProperty({
    required: true,
  })
  @IsOptional()
  parentId: string;
}
