import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class TravelDto {
  @ApiProperty({
    required: true,
  })
  @IsOptional()
  id: string;

  @ApiProperty({
    required: true,
  })
  @IsOptional()
  price: number | string;

  @ApiProperty({
    required: true,
  })
  @IsOptional()
  companyId: string;

  @ApiProperty({
    required: true,
  })
  @IsOptional()
  createdAt: string;

  @ApiProperty({
    required: true,
  })
  @IsOptional()
  employeeName: string;

  @ApiProperty({
    required: true,
  })
  @IsOptional()
  departure: string;

  @ApiProperty({
    required: true,
  })
  @IsOptional()
  destination: string;
}
