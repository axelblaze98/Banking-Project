import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-trackapplicationstatus',
  templateUrl: './trackapplicationstatus.component.html',
  styleUrls: ['./trackapplicationstatus.component.css']
})
export class TrackapplicationstatusComponent implements OnInit {
  
  loginForm: FormGroup;
  

  error_messages = {
    'fname': [
      { type: 'required', message: 'Reference ID is required' },
    ]}
  constructor(public formBuilder: FormBuilder)
   {
    this.loginForm = this.formBuilder.group({
      fname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(6)
      ]))
    },
    ); 
    }

  ngOnInit(): void {
  }

}
