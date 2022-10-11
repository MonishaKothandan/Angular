import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  isLoggedin:boolean | undefined;


  login(){
    this.isLoggedin=true;
  }
  logout(){
    this.isLoggedin=false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
