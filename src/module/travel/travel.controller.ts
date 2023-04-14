import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ErrorResponseDto } from '../../common/dto/bad-request-response.dto';
import { TransformInterceptor } from '../../interceptor/transformReq.interceptor';
import { FindTravelDto } from './dto/find-travel.dto';
import { TravelService } from './travel.service';

@ApiTags('Company travel')
@Controller()
@ApiBearerAuth()
@UseInterceptors(TransformInterceptor)
@ApiUnauthorizedResponse({
  description: 'Forbidden.',
})
@ApiBadRequestResponse({
  description: 'api failed',
  type: ErrorResponseDto,
})
export class TravelController {
  constructor(private readonly travelService: TravelService) {}

  @Get()
  @ApiOperation({ summary: "returns the company's expenses in tree form" })
  findAll(@Query() findDto: FindTravelDto) {
    return this.travelService.getAllTravel(findDto);
  }
}
