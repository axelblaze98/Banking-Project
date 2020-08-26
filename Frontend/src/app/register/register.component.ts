import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  loginForm: FormGroup;
  

  error_messages = {
    'fname': [
      { type: 'required', message: 'Account Number is required.' },
      { type: 'required', message: 'Account Number must be of 9 digit' }
    ],

    'lname': [
      { type: 'required', message: 'OTP is required.' }
    ],

    'password': [
      { type: 'required', message: 'password is required.' },
      { type: 'required', message: 'password length must be of 6 char' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' },
      { type: 'pattern', message:'password must consist one special character,one alphabet and one numeric'}
    ],
    'confirmpassword': [
      { type: 'required', message: 'password not matched' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.'},
      {type: 'pattern', message:'password must consist one special character,one alphabet and one numeric' }
    ],
    'tpassword': [
      { type: 'required', message: 'password is required' },
      { type: 'required', message: 'password length must be of 6 char' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' },
      { type: 'pattern', message:'password must consist one special character,one alphabet and one numeric'}
    ],
    'tcconfirmpassword': [
      { type: 'required', message: 'password not matched' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.'},
      {type: 'pattern', message:'password must consist one special character,one alphabet and one numeric' }
    ],
  }

  constructor(
    public formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      fname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9)
        
      ])),
      lname: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')
      ])),
      tpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')
      ])),
      tcconfirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')
      ])),
    }, { 
      validators: this.password.bind(this)
  
    });
  }

  ngOnInit() {
  }

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
  passwor(formGroup: FormGroup) {
    const { value: tpassword } = formGroup.get('tpassword');
    const { value: tcconfirmPassword } = formGroup.get('tcconfirmpassword');
    return tpassword === tcconfirmPassword ? null : { passwordNotMatch: true };
  }

}

