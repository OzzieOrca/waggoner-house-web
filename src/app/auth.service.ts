import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  public currentUser: Observable<any>;

  constructor(private router: Router, private af: AngularFire) {
    this.currentUser = this.af.auth
      .map(authData => {
        let currentUser;
        if(authData){
          currentUser = authData.google;
          af.database.object(`/users/${authData.uid}`)
            .update(authData.google);
        }else{
          currentUser = false;
          router.navigate(['']);
        }
        return currentUser;
      });
  }

  signIn() {
    this.af.auth.login();
  }

  signOut() {
    this.af.auth.logout();
  }

}
