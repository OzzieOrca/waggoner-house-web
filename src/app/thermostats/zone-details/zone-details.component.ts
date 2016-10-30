import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-zone-details',
  templateUrl: './zone-details.component.html',
  styleUrls: ['./zone-details.component.css']
})
export class ZoneDetailsComponent implements OnInit {
  @Input() zone;

  constructor() { }

  ngOnInit() {
  }

}
