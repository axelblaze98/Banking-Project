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
  {path: 'adminlogin', component: AdminloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FaqmainComponent, AccountmainpageComponent, HomepagemainComponent, AboutusComponent, ContactusComponent, LearnmoreComponent, ForgotpasswordComponent, ForgotuseridComponent, LoginComponent, RegisterComponent, OpenAccountComponent, AdminloginComponent]

