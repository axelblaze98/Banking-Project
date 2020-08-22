import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { SessionexpiredComponent } from './sessionexpired/sessionexpired.component';
import { SetnewpasswordComponent } from './setnewpassword/setnewpassword.component';
import { SetnewtransactionpasswordComponent } from './setnewtransactionpassword/setnewtransactionpassword.component';
import { AccountCreationStatusComponent } from './account-creation-status/account-creation-status.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AddBeneficiaryComponent,
    SessionexpiredComponent,
    SetnewpasswordComponent,
    SetnewtransactionpasswordComponent,
    AccountCreationStatusComponent,
    FundTransferComponent,
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
