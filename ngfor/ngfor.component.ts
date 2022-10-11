import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor() { }

  myData= [
    { id: 1, name: 'monisha', age: 21,type:"backend" },
    { id: 2, name: 'thejasri', age: 15,type:"frontend" },
    { id: 3, name: 'suman', age: 46, type:"frontend" }
  ] 

  nestedArray:any[]=[
   {type :'fronend',
    courses:[
      {cname:"angular"},
      {cname:"react"},
    ]
   },
   {
    type:'backend',
    courses:[
      {cname: 'java'},
      {cname:"nest"}
    ]
   }

  
  ] 
  

  ngOnInit(): void {
  }

}
