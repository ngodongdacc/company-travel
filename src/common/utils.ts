import { Logger } from '@nestjs/common';
import { cloneDeep } from 'lodash';

export function getLogger(context: string): Logger {
  return new Logger(context);
}

export const defaultParams = (filter: any) => {
  const skip = +filter?.skip || 0;
  const limit = +filter?.limit || 10;
  const query = cloneDeep(filter);
  query.page_size = limit;
  query.page_no = Math.round(skip / limit) + 1;
  delete query.skip;
  delete query.limit;
  return query;
};
