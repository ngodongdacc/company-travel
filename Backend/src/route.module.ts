import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { CostModule } from './module/cost/cost.module';
import { CompanyModule } from './module/company/company.module';
import { TravelModule } from './module/travel/travel.module';

@Module({
  imports: [
    CostModule,
    TravelModule,
    CompanyModule,
    RouterModule.register([
      {
        path: 'company',
        module: CompanyModule,
        children: [
          {
            path: 'travel',
            module: TravelModule,
          },
          {
            path: 'cost',
            module: CostModule,
          },
        ],
      },
    ]),
  ],
})
export class RouteModule {}
