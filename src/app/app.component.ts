import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public currentUser: any;

  constructor(private af: AngularFire) {
    this.af.auth.subscribe(authData => {
      if(authData){
        this.currentUser = authData.google;
        af.database.object(`/users/${authData.uid}`)
          .update(authData.google);
      }else{
        this.currentUser = false;
      }
    })
  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }
}
