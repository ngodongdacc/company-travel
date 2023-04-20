import { Module } from '@nestjs/common';
import { HttpClient } from '../../common/service/http-client.service';
import { TravelService } from './travel.service';
import { TravelController } from './travel.controller';

@Module({
  imports: [],
  controllers: [TravelController],
  providers: [HttpClient, TravelService],
  exports: [TravelService],
})
export class TravelModule {}
