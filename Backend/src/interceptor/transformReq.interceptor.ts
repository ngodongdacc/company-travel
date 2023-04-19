import { CallHandler, ExecutionContext, HttpException, Injectable, NestInterceptor } from '@nestjs/common';
import * as _ from 'lodash';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface Response<T> {
  statusCode: number;
  message?: string;
  data: T;
  skip?: number;
  limit?: number;
  totalSuccess?: number;
  totalFailure?: number;
  error?: any;
  time: Date;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  errorException = (err) => {
    const statusCode = _.get(err, 'response.statusCode') || _.get(err, 'response.status') || err.status || 500;
    const message = _.get(err, 'response.message') || err.message;
    const error = _.get(err, 'response.error') || err.error;
    const data = _.get(err, 'response.data');
    return {
      statusCode,
      message,
      error,
      data,
      time: new Date(),
    };
  };

  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(
      map((result) => {
        const statusCode = result?.statusCode;
        if (statusCode) {
          delete result.statusCode;
          context.switchToHttp().getResponse().status(statusCode);
        }
        const data = _.get(result, '[0]', result);
        const count = _.get(result, '[1]');
        const skip = _.get(result, '[2]');
        const limit = _.get(result, '[3]');
        return {
          statusCode,
          reqId: context.switchToHttp().getRequest().reqId,
          // if the data is array, check if data[1] is number, the response from ssa-school, else the response from auth0 or an object.
          data,
          // if data is object, no need to count. otherwise, check if the response from ssa-school or auth0 as above to get the length.
          count,
          skip,
          limit,
          time: new Date(),
        };
      }),
      catchError((err) =>
        throwError(() => {
          const error = this.errorException(err);
          return new HttpException(error, error.statusCode);
        }),
      ),
    );
  }
}
