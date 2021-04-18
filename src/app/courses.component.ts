import { CoursesServices } from './courses.services';
import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
    <h3>{{ getTitle() }} to my Courses</h3>
    <ul>
      <li *ngFor="let c of courses">
        {{ c }}
      </li>
    </ul>
    <button [style.backgroundColor]="color ? 'blue' : 'gray'">Save</button>
    <button class="btn-primary btn" [class.active]="any">Run</button>
    <div (click)="divEvent()">
      <button (click)="onSave($event)">Click Event</button>
    </div>
    
    <div>
        <input [(ngModel)]='email' (keyup.enter)="onBind()"/>
    </div> 

    <div>
      {{course.title |lowercase | uppercase }}<br/>
      {{course.title | lowercase}}<br/>
      {{ course.students |number }}<br/>
      {{ course.rating | number:'1.2-2'}}<br/>
      {{ course.price | currency:'AUD':true:'3.2-2'}}<br/>
      {{ course.releaseData |date:'shortDate' }}<br/>
    </div>
    {{text}}
  `,
})
export class CoursesComponent {
  title = 'Welcome';
  courses;
  any = true;
  color = true;
  email="rk@gmail.com"

  onBind(){
      console.log(this.email)
  } 

  onSave($event:any) {
      $event.stopPropagation();
    console.log('button was clicked',$event);
  }
  divEvent() {
    console.log('Div was clicked');
  }
  constructor(services: CoursesServices) {
    // let services = new CoursesServices();
    this.courses = services.getCourses();
  }

  getTitle() {
    return this.title;
  }
  course={
    title: "The Complete angular course",
    rating : 4.956,
    students: 95211,
    price:751.54,
    releaseData: new Date(2021,3,1)
  }
  text=`lorem lkdsjffadm dslfjdsfo dsoijd  wer oiojv vnv ear oij fsdf vslvjr dgdvoi cvvjwr poifgs svj puer vksdnvs soivu`

}
