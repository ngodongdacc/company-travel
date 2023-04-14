import { ApiProperty } from '@nestjs/swagger';

class ErrorDto {
  @ApiProperty({
    default: 503,
    example: 400,
    description: 'status resonse',
  })
  statusCode: number;
  @ApiProperty({
    example: 'The system is currently under maintenance, thank you.',
  })
  message: any;
}

export class ErrorResponseDto {
  @ApiProperty()
  error: ErrorDto;
}
