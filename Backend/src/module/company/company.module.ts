import { Module } from '@nestjs/common';
import { HttpClient } from '../../common/service/http-client.service';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';

@Module({
  imports: [],
  controllers: [CompanyController],
  providers: [HttpClient, CompanyService],
  exports: [CompanyService],
})
export class CompanyModule {}
