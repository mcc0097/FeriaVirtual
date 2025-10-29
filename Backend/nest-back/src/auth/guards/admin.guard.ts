import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // Check if user has admin role (role_id: 1)
    if (!user || user.role_id !== 1) {
      throw new ForbiddenException('Access denied. Admin role required.');
    }

    return true;
  }
}
