import { Component, OnInit,Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit,OnChanges{

  @Input() countvalue:any;
  constructor() { }

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
