import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chid-comp',
  templateUrl: './chid-comp.component.html',
  styleUrls: ['./chid-comp.component.css']
})
export class ChidCompComponent implements OnInit {

  @Output() bookTitleCreated = new EventEmitter<{ title: string }>();
  bookTitle!: string;


  onAddTitle() {
    this.bookTitleCreated.emit({ title: this.bookTitle });
    console.log("added")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
