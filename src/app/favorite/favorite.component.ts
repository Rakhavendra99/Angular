import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  inputs:['title']
  
})
export class FavoriteComponent implements OnInit  {
  @Input() isFavorite:any;
  title:any;
  @Output() change = new EventEmitter;
  list=[1,5,2,4,3];
  constructor(){    
  }

  ngOnInit(){
  }

  changes(){
    this.isFavorite=!this.isFavorite;
    this.change.emit();
  }
 
}
