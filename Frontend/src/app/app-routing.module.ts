import { SetnewpasswordComponent } from './setnewpassword/setnewpassword.component';
import { AccountCreationStatusComponent } from './account-creation-status/account-creation-status.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { LogoutComponent } from './logout/logout.component';
import { TrackapplicationstatusComponent } from './trackapplicationstatus/trackapplicationstatus.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { OpenAccountComponent } from './open-account/open-account.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotuseridComponent } from './forgotuserid/forgotuserid.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LearnmoreComponent } from './learnmore/learnmore.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FaqmainComponent } from './faqmain/faqmain.component';
import { AccountmainpageComponent } from './accountmainpage/accountmainpage.component';
import { HomepagemainComponent } from './homepagemain/homepagemain.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomepagemainComponent},
  {path: 'faqmain', component: FaqmainComponent},
  {path: 'accountmainpage', component: AccountmainpageComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'learnmore', component: LearnmoreComponent},
  {path: 'forgotpassword', component: ForgotpasswordComponent},
  {path: 'forgotuserid', component: ForgotuseridComponent},
  {path: 'login', component: LoginComponent},
  {path: 'openaccount', component: OpenAccountComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'adminlogin', component: AdminloginComponent},
  {path: 'addbeneficiary', component: AddBeneficiaryComponent},
  {path: 'fundtransfer', component: FundTransferComponent},
  {path: 'trackapp', component: TrackapplicationstatusComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'adminregister', component: AdminregisterComponent},
  {path: 'trackaccount', component: AccountCreationStatusComponent},
  {path: 'setloginpassword', component: SetnewpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FaqmainComponent, AccountmainpageComponent, HomepagemainComponent, AboutusComponent, ContactusComponent, LearnmoreComponent, ForgotpasswordComponent, ForgotuseridComponent, LoginComponent, RegisterComponent, OpenAccountComponent, AdminloginComponent, AddBeneficiaryComponent, FundTransferComponent, TrackapplicationstatusComponent, LogoutComponent, AdminregisterComponent, AccountCreationStatusComponent, SetnewpasswordComponent]

