import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit,Input } from '@angular/core';

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

  ngOnChanges():void{
    console.log("       OnChange")
  }
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
