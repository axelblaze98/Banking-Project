import { ConnectionService } from './connection.service';
import { navBarAdminComponent } from './navbaradmin.component';
import { navBarAccountComponent } from './navbaraccount.component';
import { navBarMainComponent } from './navbarmain.component';
import { navBarLoginComponent } from './navbarlogin.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { SessionexpiredComponent } from './sessionexpired/sessionexpired.component';
<<<<<<< HEAD
import { TransactionhistoryComponent } from './transactionhistory/transactionhistory.component';
import { UseridComponent } from './userid/userid.component';
import { ReferenceidComponent } from './referenceid/referenceid.component';
import { UpdatedpasswordComponent } from './updatedpassword/updatedpassword.component';
import { AfterconfirmtransactionComponent } from './afterconfirmtransaction/afterconfirmtransaction.component';
=======
>>>>>>> ce1e351fc4ee95a49ea13a62020ab17aa7e9b57b

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SessionexpiredComponent,
    navBarMainComponent,
    navBarLoginComponent,
    navBarAccountComponent,
    navBarAdminComponent,
<<<<<<< HEAD
    TransactionhistoryComponent,
    UseridComponent,
    ReferenceidComponent,
    UpdatedpasswordComponent,
    AfterconfirmtransactionComponent
=======
>>>>>>> ce1e351fc4ee95a49ea13a62020ab17aa7e9b57b
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
