import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
 counter=1;
  constructor() { }

  ngOnInit(): void {
  }

  counters(){
    this.counter++;
  }
}
