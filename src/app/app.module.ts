import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ThermostatsComponent } from './thermostats/thermostats.component';
import { ZoneDetailsComponent } from './thermostats/zone-details/zone-details.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

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

const appRoutes: Routes = [
  { path: 'thermostats', component: ThermostatsComponent, canActivate: [AuthGuard]},
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ThermostatsComponent,
    ZoneDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    NgbModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
