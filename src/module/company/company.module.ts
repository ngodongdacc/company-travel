import { Module } from '@nestjs/common';
import { HttpTuyaClient } from '../../common/service/http-tuya-client.service';
import { CompanyService } from './company.service';

@Module({
  imports: [],
  providers: [HttpTuyaClient, CompanyService],
  exports: [CompanyService],
})
export class CompanyModule {}
