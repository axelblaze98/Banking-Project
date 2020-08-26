import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from './../admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user =new Login();

  UserLogin()
  {

    console.log(this.user);
    this.http.post<any>("http://localhost:8086/userLogin", this.user)
    .subscribe(
      data => {console.log(data)
      if (data.status=="FAILURE")
      {
        if(data.message =="User Doesn't Exist")
        {
          alert("User does not Exist, Register before login")
          this.router.navigate(['register']);
        }
        else if(data.message =="Account Blocked")
        {
          alert("Your account has been blocked, change password and try again")
          this.router.navigate(['forgotpassword']);
        }
        else
        {
          alert(data.message)
          this.router.navigate(['login']);
        }
      }
      else{
        alert("Welcome Dear Customer");
        sessionStorage.setItem('AccountNumber', data.accountNumber);
        console.log(data.accountNumber)
        this.router.navigate(['accountmainpage']);
      }
    }
)
  }






  loginForm: FormGroup;
  

  error_messages = {
    'fname': [
      { type: 'required', message: 'User Id is required.' },
    ],


    'password': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' },
      { type: 'pattern', message:'password must consist one special character,one alphabet and one numeric'}
    ],
    
  }

  constructor(
    public formBuilder: FormBuilder, private http: HttpClient,private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      fname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(6)
      ])),
      
      
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
        Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')
      ])),
      
    }, 
      
    );
  }

  ngOnInit() {
  }

  

}