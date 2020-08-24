import { navBarAccountComponent } from './navbaraccount.component';
import { navBarMainComponent } from './navbarmain.component';
import { navBarLoginComponent } from './navbarlogin.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { SessionexpiredComponent } from './sessionexpired/sessionexpired.component';
import { SetnewtransactionpasswordComponent } from './setnewtransactionpassword/setnewtransactionpassword.component';
import { ForgotuseridComponent } from './forgotuserid/forgotuserid.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SessionexpiredComponent,
    SetnewtransactionpasswordComponent,
    navBarMainComponent,
    navBarLoginComponent,
    navBarAccountComponent,
    ForgotuseridComponent
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
