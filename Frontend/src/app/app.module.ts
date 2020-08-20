import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepagemainComponent } from './homepagemain/homepagemain.component';
import { AccountmainpageComponent } from './accountmainpage/accountmainpage.component';
import { FaqmainComponent } from './faqmain/faqmain.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepagemainComponent,
    AccountmainpageComponent,
    FaqmainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
