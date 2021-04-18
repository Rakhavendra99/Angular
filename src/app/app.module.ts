import { SummaryPipe } from './summary.pipe';
import { CoursesServices } from './courses.services';
import { CoursesComponent } from './courses.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Happy } from './happy.component';
import { FirstComponent } from './first/first.component';
import { FormsModule, NgModel } from '@angular/forms';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

import { HttpClientModule} from '@angular/common/http';
import { FavoriteComponent } from './favorite/favorite.component'
import { JSONPlaceholderService } from './services/jsonplaceholder.service';
import { UserComponent } from './user/user.component'

@NgModule({
  declarations: [
    AppComponent,
    Happy,
    FirstComponent,
    Child1Component,
    Child2Component,
    CoursesComponent ,
    SummaryPipe,
    FavoriteComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CoursesServices,
    JSONPlaceholderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
