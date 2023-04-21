import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ErrorResponseDto } from '../../common/dto/bad-request-response.dto';
import { TransformInterceptor } from '../../interceptor/transformReq.interceptor';
import { FindTravelDto } from './dto/find-travel.dto';
import { TravelService } from './travel.service';
import { TravelResponseDto } from './dto/travelResponse.dto';

@ApiTags('Company travel')
@Controller()
@UseInterceptors(TransformInterceptor)
@ApiOkResponse({
  description: 'success',
  type: TravelResponseDto,
})
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
  @ApiOperation({ summary: 'Returns a list of employee expenses' })
  findAll(@Query() findDto: FindTravelDto) {
    return this.travelService.getAllTravel(findDto);
  }
}
