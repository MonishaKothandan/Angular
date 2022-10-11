import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
  <h1> Hii {{message}} </h1>
  `,
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  message = 'string';
  // Employee:IMy ={
  //   name:"moni",
  //   age:21
  // }
  constructor() { }

  ngOnInit() {
    this.message = "Suman";
  }

}
// using interface 
// interface IMy{
//   name:string;
//   age:number;
// }
