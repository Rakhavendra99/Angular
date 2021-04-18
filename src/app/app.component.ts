import { Component, Input } from '@angular/core';
import { JSONPlaceholderService} from './services/jsonplaceholder.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
   title = 'my-angular-app';
  // selectedUser = '';
  // showUser: boolean = true;

  // users = [
  //   { name: 'ram', employee_id: '12', age: 31 },
  //   { name: 'mohan', employee_id: '13', age: 30 },
  //   { name: 'abi', employee_id: '14', age: 32 },
  //   { name: 'veena', employee_id: '15', age: 29 },
  //   { name: 'raj', employee_id: '16', age: 35 },
  // ];
  // addMember(){
  //   this.users = [
  //     { name: 'ram', employee_id: '12', age: 31 },
  //     { name: 'mohan', employee_id: '13', age: 30 },
  //     { name: 'abi', employee_id: '14', age: 32 },
  //     { name: 'veena', employee_id: '15', age: 29 },
  //     { name: 'raj', employee_id: '16', age: 35 },
  //     { name: 'ravi', employee_id: '10', age: 22 },
  //     { name: 'pravin', employee_id: '7', age: 5 },
  //   ];
  // }

  // // ngIf
  // showElements:boolean=true;

  // number:String='1';

  // datas:Array<any>

  // constructor(private JSONPlaceholder:JSONPlaceholderService){
  //   this.datas=new Array<any>()
  // }

  // getDataFromAPI(){
  //   this.JSONPlaceholder.getData().subscribe((data)=>{
  //       console.log(data)
  //       this.datas=data
  //   })
  // }

  // constructor(private JSONPlaceholder:JSONPlaceholderService){
    
  // }


  // Post = {
  //   title:"Title",
  //   isFavorite:true
  // }
  // largeFont="large-font green"
  // smallFont="small-font"
  // bluecolor="blue"

  // date=new Date()
  // myName="rakhavendra"
  // myNumber=12345.69870
  // myCurrency=45000.56

  // animals =[
  //   'Lion',
  //   'tiger',
  //   'fox',
  //   'cheeta',
  //   'dog'
  // ]

  // helpPopup = false;
  // feedback = '';
  // kioskId = '';
  // checkoutId = '';

  // constructor(){
  //     } 

  //   showHelpPopup() {
  //       this.helpPopup = true;
  //   }

  //   closePopup() {
  //       this.helpPopup = false;
  //   }



}