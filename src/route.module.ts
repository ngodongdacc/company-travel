import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { CostModule } from './module/cost/cost.module';

@Module({
  imports: [
    CostModule,
    RouterModule.register([
      {
        path: 'company',
        // module: CompanyModule,
        children: [
          // {
          //   path: 'travel',
          //   module: TravelModule,
          // },
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
