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
  price: number;

  @ApiProperty({
    required: true,
  })
  @IsOptional()
  companyId: string;
}
