import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

fdescribe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('1 should display the user name if user is logged in',()=>{
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('2 should display the user name if user is logged',()=>{
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.debugElement.componentInstance;
    component.isLogin= true;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
  })

  it('3 should display the user name if user is logged in',()=>{
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.debugElement.componentInstance;
    component.isLogin= false;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').textContent).toContain('User not Loged in')
  })
});
