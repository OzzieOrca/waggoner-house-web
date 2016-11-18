import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ThermostatsComponent } from './thermostats/thermostats.component';
import { ZoneDetailsComponent } from './thermostats/zone-details/zone-details.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCTxvTzS1okO8lq-ZBk0q55geHttcQfDQ0",
  authDomain: "waggoner-house.firebaseapp.com",
  databaseURL: "https://waggoner-house.firebaseio.com",
  storageBucket: "waggoner-house.appspot.com",
  messagingSenderId: "942780654805"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent,
    ThermostatsComponent,
    ZoneDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
