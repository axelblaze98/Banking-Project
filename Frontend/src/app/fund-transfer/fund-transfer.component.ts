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
    'tpassword': [
      { type: 'required', message: 'Transaction Password is required.' }
      
    ]
  }
  constructor(public formBuilder: FormBuilder)
  {
    this.loginForm = this.formBuilder.group({
      tpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
        
      ]))
    }); 
      
  }

  ngOnInit(): void {
  }

}
