import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
export class ResponseDto {
  @ApiProperty({
    required: true,
    type: 'number',
    example: 200,
    description: 'return status code',
  })
  statusCode?: number = 200;
}
