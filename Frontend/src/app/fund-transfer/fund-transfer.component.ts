import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {
  loginForm: FormGroup;
  error_messages = {
    'tpassword': [
      { type: 'required', message: 'Transaction Password is required.' }
      
    ],
  
    'fname': [
      { type: 'required', message: 'Account Number is required.' },
    ],
    
    'lname': [
      { type: 'required', message: 'Amount is required.' },
    ],
     
    'rname': [
      { type: 'required', message: 'Remarks required.' },
    ]
  }
  constructor(public formBuilder: FormBuilder, private http: HttpClient,private router: Router)
   { 
    this.loginForm = this.formBuilder.group({
      fname: new FormControl('', Validators.compose([
        Validators.required ,
        Validators.minLength(9),
        Validators.maxLength(9)
      ])),
      lname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.min(1),
        Validators.pattern(/^-?(1|[2-9]\d*)?$/)
        
      ])),
      rname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      tpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
        
      ]))
    });
   }
  add
  AccNo=sessionStorage.getItem('AccountNumber');
  ngOnInit(): void {
    this.http.get<any>("http://localhost:8086/getBeneficiaryNameAndAccountNo/"+this.AccNo) //fetching account number for current session
    .subscribe(
      data => {console.log(data)
        this.add = data; //data stored in user obj
        console.log(this.add);
      })
  }
  types = ['NEFT', 'IMPS', 'RTGS'];
}
