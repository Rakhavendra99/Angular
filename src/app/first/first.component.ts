import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  @Input() countvalue:any;
  constructor() { 
    console.log("first constructor is running")
  }
  ngOnChanges(changes:SimpleChanges){
    for(let property in changes){
      if(property === 'countvalue'){
        if(changes[property].currentValue == 5){
          alert('execeed 5 form child 3')
        }
      }
    }
   console.log("changes----------",changes); 
  }

  // ngOnChanges():void{
  //   console.log("       OnChange")
  // }
  ngOnInit(): void {
    console.log("       onInit")
  }
  ngDoCheck():void{
    console.log("       Docheck")
  }
  ngAfterContentInit():void{
    console.log("       AfterContentInit")
  }
  ngAfterContentChecked():void{
    console.log("       Aftercontentchecked")
  }
  ngAfterViewInit():void{
    console.log("       AfterviewInit")
  }
  ngAfterViewChecked():void{
    console.log("       Agterviewchecked")
  }
  ngOnDestroy():void{
    console.log("       OnDestroy")
  }
}
