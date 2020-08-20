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
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ForgotuseridComponent } from './forgotuserid/forgotuserid.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SessionexpiredComponent } from './sessionexpired/sessionexpired.component';
import { SetnewpasswordComponent } from './setnewpassword/setnewpassword.component';
import { SetnewtransactionpasswordComponent } from './setnewtransactionpassword/setnewtransactionpassword.component';
import { AccountCreationStatusComponent } from './account-creation-status/account-creation-status.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepagemainComponent,
    AccountmainpageComponent,
    FaqmainComponent,
    AddBeneficiaryComponent,
    OpenAccountComponent,
    AdminloginComponent,
    ForgotpasswordComponent,
    ForgotuseridComponent,
    LoginComponent,
    RegisterComponent,
    SessionexpiredComponent,
    SetnewpasswordComponent,
    SetnewtransactionpasswordComponent,
    AccountCreationStatusComponent,
    FundTransferComponent
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
