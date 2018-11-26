import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';

import { AppComponent } from './app.component';
import { CountdownTimerModule } from 'ngx-countdown-timer';
// import { CountDown } from "ng2-date-countdown";
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMasonryGridModule } from 'ng-masonry-grid';

@NgModule({
  declarations: [
    AppComponent,
    // CountDown,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CountdownTimerModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    LightboxModule,
    NgbModule,
    NgMasonryGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
