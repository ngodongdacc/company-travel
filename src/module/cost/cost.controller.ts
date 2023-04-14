import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ErrorResponseDto } from '../../common/dto/bad-request-response.dto';
import { TransformInterceptor } from '../../interceptor/transformReq.interceptor';
import { CostService } from './cost.service';

@ApiTags('Company cost')
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
export class CostController {
  constructor(private readonly costService: CostService) {}

  @Get()
  @ApiOperation({ summary: "returns the company's cost by tree" })
  companyTreeCost() {
    return this.costService.companyTreeCost();
  }
}
