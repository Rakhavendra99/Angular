import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit,DoCheck,OnChanges,AfterContentInit, AfterContentChecked,
AfterViewInit,AfterViewChecked,OnDestroy {
   
  count =0;
  constructor() { 
    console.log("Child1 constructor run")
  }

  

  increment(){
    this.count++;
    if(this.count == 10){
      alert("Your reach 10 in child 1");
    }
  }
  decrement(){
    this.count--;
  }
 
  ngOnChanges():void{
    console.log("OnChange")
  }
  ngOnInit(): void {
    console.log("onInit")
  }
  ngDoCheck():void{
    console.log("Docheck")
  }
  ngAfterContentInit():void{
    console.log("AfterContentInit")
  }
  ngAfterContentChecked():void{
    console.log("Aftercontentchecked")
  }
  ngAfterViewInit():void{
    console.log("AfterviewInit")
  }
  ngAfterViewChecked():void{
    console.log("Agterviewchecked")
  }
  ngOnDestroy():void{
    console.log("OnDestroy")
  }
}

