import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 ngOnInit(): void {
 }

 count:number=0;
 
 increaseCount(){
  this.count++;
 }

 decreaseCount(){
  this.count--;
 }
}
