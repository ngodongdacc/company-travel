import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ErrorResponseDto } from '../../common/dto/bad-request-response.dto';
import { TransformInterceptor } from '../../interceptor/transformReq.interceptor';
import { CompanyService } from './company.service';
import { FindCompanyDto } from './dto/find-company.dto';

@ApiTags('company')
@Controller()
@UseInterceptors(TransformInterceptor)
@ApiUnauthorizedResponse({
  description: 'Forbidden.',
})
@ApiBadRequestResponse({
  description: 'api failed',
  type: ErrorResponseDto,
})
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  @ApiOperation({ summary: 'Returns a list of companies' })
  getAllCompany(@Query() findDto: FindCompanyDto) {
    return this.companyService.getAllCompany(findDto);
  }
}
