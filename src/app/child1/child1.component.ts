import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
   
  count =0;
  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.count++;
    if(this.count == 10){
      alert("Your reach 10");
    }
  }
  decrement(){
    this.count--;
  }

}
