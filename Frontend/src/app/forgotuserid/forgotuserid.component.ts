import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-forgotuserid',
  templateUrl: './forgotuserid.component.html',
  styleUrls: ['./forgotuserid.component.css']
})
export class ForgotuseridComponent implements OnInit {

  
  loginForm: FormGroup;
  

  error_messages = {
    'fname': [
      { type: 'required', message: 'Account Number is required.' },
    ],


    'password': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' },
      { type: 'pattern', message:'password must consist one special character,one alphabet and one numric'}
    ],
    
  }

  constructor(
    public formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      fname: new FormControl('', Validators.compose([
        Validators.required
        
        
      ])),
      
      
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        
      ])),
      
    }, 
      
    );
  }

  ngOnInit() {
  }

  

}

