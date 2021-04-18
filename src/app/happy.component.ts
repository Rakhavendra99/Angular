import { Component } from "@angular/core";

@Component({
    selector:"happy",
    templateUrl:"./happy.component.html",
})


export class Happy{
    fontColor="blue";
    sayHelloId=1;
    //canClick=false;
    message="hello, World";
    sayMessage(){
        alert(this.message);
    }

}