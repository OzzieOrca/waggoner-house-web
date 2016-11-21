import { Injectable }     from '@angular/core';
import { Router, CanActivate }    from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate() {
    return this.authService.currentUser
      .map(currentUser => !!currentUser)
      .take(1)
      .do(currentUser => {
        if (!currentUser) {
          this.router.navigate(['']);
        }
      });
  }
}
