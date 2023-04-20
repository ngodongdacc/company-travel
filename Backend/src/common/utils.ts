import { Logger } from '@nestjs/common';

export function getLogger(context: string): Logger {
  return new Logger(context);
}
