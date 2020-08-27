import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {
  loginForm: FormGroup;
  error_messages = {
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
  constructor(public formBuilder: FormBuilder)
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
      ]))
    });
  }

  ngOnInit(): void {
  }
  Add = ['Parth', 'Isha', 'Yash', 'Ankit'];
  types = ['NEFT', 'IMPS', 'RTGS'];
  

}
