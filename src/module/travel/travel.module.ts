import { Module } from '@nestjs/common';
import { HttpTuyaClient } from '../../common/service/http-tuya-client.service';
import { TravelService } from './travel.service';

@Module({
  imports: [],
  controllers: [],
  providers: [HttpTuyaClient, TravelService],
  exports: [TravelService],
})
export class TravelModule {}
