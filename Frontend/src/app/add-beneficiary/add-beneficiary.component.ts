import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent implements OnInit {

  loginForm: FormGroup;
  error_messages = {
    'fname': [
      { type: 'required', message: 'Beneficiary Name is required.' },
    ],
    'password': [
      { type: 'required', message: 'Account Number is required.' },
      { type: 'required', message: 'Account Number must be of 9 digit' }
      
    ],
    'confirmpassword': [
      { type: 'required', message: 'Account Number is required.'},
      { type: 'required', message: 'Account Number must be of 9 digit' }
      
    ]
  }
  constructor( public formBuilder: FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      fname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(9)
      
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(9)
      ])),
    }, { 
      validators: this.password.bind(this)
  
    });
  }

  ngOnInit(): void {
  }
  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

}
