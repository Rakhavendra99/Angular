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
  viewMode = "otherlist view";

  courses=[
    {id:1 , name:"course - 1" },
    {id:2 , name:"course - 2" },
    {id:3 , name:"course - 3" },
    {id:4 , name:"course - 4" }
  ]

  onAdd(){
    this.courses.push({id:5,name:'course - 5'});
  }
  onRemove(i:any){
    let index = this.courses.indexOf(i);
    this.courses.splice(index,1);
  }

  ngOnInit(){
  }

  changes(){
    this.isFavorite=!this.isFavorite;
    this.change.emit();
  }
 
}
