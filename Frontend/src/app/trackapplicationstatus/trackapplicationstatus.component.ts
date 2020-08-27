import { ConnectionService } from './../connection.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trackapplicationstatus',
  templateUrl: './trackapplicationstatus.component.html',
  styleUrls: ['./trackapplicationstatus.component.css']
})
export class TrackapplicationstatusComponent implements OnInit {
  
  loginForm: FormGroup;
  public refId:string;
  //public account;

  error_messages = {
    'fname': [
      { type: 'required', message: 'Reference ID is required' },
    ]}
  constructor(private http: HttpClient, public formBuilder: FormBuilder, private router:Router, private _connservice : ConnectionService)
   {
    this.loginForm = this.formBuilder.group({
      fname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(5)
      ]))
    },
    ); 
    }

  ngOnInit(): void {
  }

  view()
  {
    this._connservice.getAccountDetails(this.refId).subscribe(data=> console.log(data))

  }


  // view(){
  //   console.log(this.refId)
  //   this.http.get<any>("http://localhost:8086/viewAccountByRefId/"+this.refId)
  //     .subscribe(data=>{
  //       this.account = data;
  //       sessionStorage.setItem('referenceId', this.refId)
  //       sessionStorage.setItem('adminApproved', this.account.approvedByAdmin)
  //       sessionStorage.setItem('adminRemark', this.account.adminRemark)
  //       sessionStorage.setItem('accNumber', this.account.accountNumber)
  //       this.router.navigate(['trackaccount'])
  //     })
  //   }
    
}

