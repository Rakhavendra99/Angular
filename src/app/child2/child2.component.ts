import { Component, OnInit,Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  
  @Input() countvalue:any;
  constructor() { 
    console.log("child2 constructor is run")
  }

  // ngOnChanges(changes:SimpleChanges){
  //   for(let property in changes){
  //     if(property === 'countvalue'){
  //       if(changes[property].currentValue == 7){
  //         alert('execeed 7 form child 2')
  //       }
  //     }
  //   }
  //  console.log("changes----------",changes); 
  // }
  ngOnChanges():void{
    console.log("    OnChange")
  }
  ngOnInit(): void {
    console.log("    onInit")
  }
  ngDoCheck():void{
    console.log("    Docheck")
  }
  ngAfterContentInit():void{
    console.log("    AfterContentInit")
  }
  ngAfterContentChecked():void{
    console.log("    Aftercontentchecked")
  }
  ngAfterViewInit():void{
    console.log("    AfterviewInit")
  }
  ngAfterViewChecked():void{
    console.log("    Agterviewchecked")
  }
  ngOnDestroy():void{
    console.log("    OnDestroy")
  }
}
