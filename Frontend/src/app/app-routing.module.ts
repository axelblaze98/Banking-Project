import { FaqmainComponent } from './faqmain/faqmain.component';
import { AccountmainpageComponent } from './accountmainpage/accountmainpage.component';
import { HomepagemainComponent } from './homepagemain/homepagemain.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
