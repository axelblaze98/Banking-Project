import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConnectionService } from './../connection.service';
import { FundsDataClass } from '../admin';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {
  loginForm: FormGroup;
  error_messages = {
    // 'fname': [
    //   { type: 'required', message: 'Account Number is required.' },
    // ],
    
    'lname': [
      { type: 'required', message: 'Amount is required.' },
    ],
     
    'rname': [
      { type: 'required', message: 'Password required.' },
      { type: 'minLength', message: 'Password should be of Length 4.' },
      { type: 'maxLength', message: 'Password should be of Length 4.' }
    ]
  }
  constructor(public formBuilder: FormBuilder, private http: HttpClient,private router: Router, private _connservice : ConnectionService)
   { 
    this.loginForm = this.formBuilder.group({
      // fname: new FormControl('', Validators.compose([
      //   Validators.required,
      //   Validators.minLength(8),
      //   Validators.maxLength(8)
      // ])),
      lname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.min(1),
        Validators.pattern(/^-?(0|[0-9]\d*)?$/)
        
      ])),
      rname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(4),
        Validators.minLength(4),
        Validators.pattern(/^-?(0|[0-9]\d*)?$/)
      ]))
    });
  }
  add
  AccNo=sessionStorage.getItem('AccountNumber');

  a;b;c;d;e;

  ngOnInit(): void {
    this._connservice.viewBeneficiary(this.AccNo)
    .subscribe(data => {
        console.log(data)
        this.add = data; //data stored in user obj
        console.log(this.add);
      })
  }
  
  fundsDataObj:FundsDataClass = new FundsDataClass();
  send(form){
    console.log(this.fundsDataObj)
    // console.log(form.value.amount)
    // console.log(form.value.pin)
    // console.log(form.value.transactionType)
    // console.log(form.value.beneficiary)

    this.fundsDataObj.toAccount = form.value.beneficiary;
    this.fundsDataObj.transactionMode = form.value.transactionType;
    this.fundsDataObj.fromAccount = this.AccNo;
    this.fundsDataObj.transactionBalance = form.value.amount;
    this.fundsDataObj.tnPassword = form.value.amount;


    this._connservice.setFundTransferData(this.fundsDataObj)

    this.router.navigate(['confirmtransaction']);
  }
}