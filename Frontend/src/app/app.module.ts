import { navBarMainComponent } from './navbarmain.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { SessionexpiredComponent } from './sessionexpired/sessionexpired.component';
import { SetnewpasswordComponent } from './setnewpassword/setnewpassword.component';
import { SetnewtransactionpasswordComponent } from './setnewtransactionpassword/setnewtransactionpassword.component';
import { AccountCreationStatusComponent } from './account-creation-status/account-creation-status.component';
import { LogoutComponent } from './logout/logout.component';
import { TrackapplicationstatusComponent } from './trackapplicationstatus/trackapplicationstatus.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SessionexpiredComponent,
    SetnewpasswordComponent,
    SetnewtransactionpasswordComponent,
    AccountCreationStatusComponent,
    LogoutComponent,
    TrackapplicationstatusComponent,
    AdminregisterComponent, 
    navBarMainComponent
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
