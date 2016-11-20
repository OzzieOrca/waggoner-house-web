import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-zone-details',
  templateUrl: './zone-details.component.html',
  styleUrls: ['./zone-details.component.scss']
})
export class ZoneDetailsComponent implements OnInit {
  @Input() zone : any;
  @Output() zoneUpdate : any = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  toggleFan(){
    this.zoneUpdate.emit({ fanMode: this.zone.fanMode === 1 ? 0 : 1 });
  }

  setMode(mode){
    this.zoneUpdate.emit({ currentMode: mode });
  }

  updateSetPointCooling(temp){
    if(temp < 44){
      temp = 44;
    }
    if(temp > 113){
      temp = 113;
    }
    this.zoneUpdate.emit({ setPointCooling: temp });
  }

  updateSetPointHeating(temp){
    if(temp < 40){
      temp = 40;
    }
    if(temp > 109){
      temp = 109;
    }
    this.zoneUpdate.emit({ setPointHeating: temp });
  }
}
