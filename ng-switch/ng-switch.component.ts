import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employee:any= [
    { id: 1, name: 'monisha', age: 21, type:"backend" },
    { id: 2, name: 'thejasri', age: 15, type:"frontend" },
    { id: 3, name: 'suman', age: 46 }
  ]; 


}
