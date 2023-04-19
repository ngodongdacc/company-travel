import { Module } from '@nestjs/common';
import { CompanyModule } from '../company/company.module';
import { TravelModule } from '../travel/travel.module';
import { CostController } from './cost.controller';
import { CostService } from './cost.service';

@Module({
  imports: [CompanyModule, TravelModule],
  controllers: [CostController],
  providers: [CostService],
  exports: [],
})
export class CostModule {}
