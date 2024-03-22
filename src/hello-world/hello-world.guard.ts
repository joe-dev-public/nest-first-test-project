import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class HelloWorldGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    // Kinda silly non-example, but demonstrates how guards work:
    if (request.body.someKey == 'someValue') {
      return true;
    }

    return false;
  }
}
