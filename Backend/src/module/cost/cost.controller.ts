import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ErrorResponseDto } from '../../common/dto/bad-request-response.dto';
import { TransformInterceptor } from '../../interceptor/transformReq.interceptor';
import { CostService } from './cost.service';
import { CompanyTreeCostResponseDto } from './dto/companyTreeCostResponse.dto';

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
  @ApiOkResponse({
    description: 'success',
    type: CompanyTreeCostResponseDto,
  })
  @ApiOperation({ summary: "returns the company's cost by tree" })
  companyTreeCost() {
    return this.costService.companyTreeCost();
  }
}
