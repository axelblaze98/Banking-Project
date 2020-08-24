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
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SessionexpiredComponent,
    SetnewtransactionpasswordComponent,
    navBarMainComponent,
    navBarLoginComponent,
    navBarAccountComponent
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
