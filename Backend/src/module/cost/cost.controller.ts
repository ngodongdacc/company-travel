import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ErrorResponseDto } from '../../common/dto/bad-request-response.dto';
import { TransformInterceptor } from '../../interceptor/transformReq.interceptor';
import { CostService } from './cost.service';
import { FindCompanyDto } from '../company/dto/find-company.dto';

@ApiTags('Company cost')
@Controller()
@UseInterceptors(TransformInterceptor)
@ApiUnauthorizedResponse({
  description: 'Forbidden.',
})
@ApiBadRequestResponse({
  description: 'api failed',
  type: ErrorResponseDto,
})
export class CostController {
  constructor(private readonly costService: CostService) {}

  @Get()
  @ApiOperation({ summary: "returns the company's cost by tree" })
  companyTreeCost(@Query() query: FindCompanyDto) {
    return this.costService.companyTreeCost(query);
  }
}
