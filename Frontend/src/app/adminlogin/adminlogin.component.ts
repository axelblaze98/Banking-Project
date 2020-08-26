import { Admin } from './../admin';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent{

  ngOnInit(): void {
  }

  user = new Admin();

  AdminLogin()
  {

    console.log(this.user);
    this.http.post<any>("http://localhost:8086/loginAdmin", this.user)
    .subscribe(
      data => {console.log(data)
      if (data.status=="FAILURE")
      {
        alert(data.message);
      }
      else{
        this.router.navigate(['admindashboard']);
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
    public formBuilder: FormBuilder, private http: HttpClient,private router: Router)
    {
    this.loginForm = this.formBuilder.group({
      fname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(6),
      ])),
      
      
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')
      ])),
      
    }, 
      
    );
  }
}