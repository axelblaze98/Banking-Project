import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Forgotpassword } from './../admin';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
    
  user:Forgotpassword = new Forgotpassword();
  
  loginForm: FormGroup;
  

  error_messages = {
    'fname': [
      { type: 'required', message: 'User Id is required.' },
    ],


    'password': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' },
      { type: 'pattern', message:'password must consist one special character,one alphabet and one numric'}
    ],
    
  }

  constructor(
    public formBuilder: FormBuilder,
    private http: HttpClient,private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      fname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(6)
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

  view(){
    console.log(this.user)
    this.http.post<any>("http://localhost:8086/forgetPassword",this.user)
      .subscribe(data=>{
        if(data.status=='FAILURE'){
          alert(data.message);
        }else{
          alert("Suscessful");
          this.router.navigate(['setloginpassword'])
        }
      })
  }

}
