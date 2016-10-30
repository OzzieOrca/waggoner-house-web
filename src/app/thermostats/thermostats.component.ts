import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-thermostats',
  templateUrl: './thermostats.component.html',
  styleUrls: ['./thermostats.component.css']
})
export class ThermostatsComponent implements OnInit {
  zones: FirebaseListObservable<any>;
  constructor(af: AngularFire) {
    this.zones = af.database.list('/thermostats/zones');
  }

  ngOnInit() {
  }

}
