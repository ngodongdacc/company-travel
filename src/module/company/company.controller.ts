import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ErrorResponseDto } from '../../common/dto/bad-request-response.dto';
import { TransformInterceptor } from '../../interceptor/transformReq.interceptor';
import { CompanyService } from './company.service';
import { FindCompanyDto } from './dto/find-company.dto';

@ApiTags('company')
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
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  @ApiOperation({ summary: "returns the company's" })
  getAllCompany(@Query() findDto: FindCompanyDto) {
    return this.companyService.getCompany(findDto);
  }

  @Get('tree')
  @ApiOperation({ summary: "returns the company's" })
  getAllCompanyTree() {
    return this.companyService.getAllCompanyTree();
  }
}
