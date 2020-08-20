import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepagemainComponent } from './homepagemain/homepagemain.component';
import { AccountmainpageComponent } from './accountmainpage/accountmainpage.component';
import { FaqmainComponent } from './faqmain/faqmain.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { OpenAccountComponent } from './open-account/open-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepagemainComponent,
    AccountmainpageComponent,
    FaqmainComponent,
    AddBeneficiaryComponent,
    OpenAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
