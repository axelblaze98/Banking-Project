import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserRegister } from './../admin';
import { ConnectionService } from './../connection.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new UserRegister();

  Registration()
  {
    
    console.log(this.user);
    this.http.post<any>("http://localhost:8086/userRegister", this.user)
    .subscribe(
      data => {console.log(data)
      if (data.status=="FAILURE")
      { 
        if(data.message=="Account Not Found"){
        alert("Please create Account Before Registration");
        }
        else{
          alert("User Already Exists")
          this.router.navigate(['login'])
        }
      }
      else{
        this.service.setUserId(data.userId)
        // alert("User Registered"+data.userId); //alert userid once implemented
        this.router.navigate(['displayreferenceid']);
      }
    }
)
  }




  loginForm: FormGroup;
  

  error_messages = {
    'fname': [
      { type: 'required', message: 'Account Number is required.' },
      { type: 'required', message: 'Account Number must be of 8 digit' }
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
      { type: 'required', message: 'password length must be of 4 char' },
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
    public formBuilder: FormBuilder, private http: HttpClient,private router: Router,
    public service : ConnectionService

  ) {
    this.loginForm = this.formBuilder.group({
      fname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
        
      ])),
      lname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
      ])),
      
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
        Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
        Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')
      ])),
      tpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
      ])),
      tcconfirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
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

