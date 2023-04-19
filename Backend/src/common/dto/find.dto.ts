import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';
export class FindDto {
  @ApiProperty({
    required: false,
    default: 0,
    description: 'omit record number',
  })
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @IsOptional()
  skip?: number = 0;

  @ApiProperty({
    required: false,
    default: 10,
    description: 'limit number of records per page',
  })
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @IsOptional()
  limit?: number = 10;
}
