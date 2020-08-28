import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Forgotuserid } from './../admin';

@Component({
  selector: 'app-forgotuserid',
  templateUrl: './forgotuserid.component.html',
  styleUrls: ['./forgotuserid.component.css']
})
export class ForgotuseridComponent implements OnInit {
    
  user:Forgotuserid = new Forgotuserid();
  
  loginForm: FormGroup;
  

  error_messages = {
    'fname': [
      { type: 'required', message: 'Account Number is required.' },
    ],


    'password': [
      { type: 'required', message: 'OTP is required.' },
      { type: 'minlength', message: 'OTP length.' },
      { type: 'maxlength', message: 'OTP length.' }
     
    ],
    
  }

  constructor(
    public formBuilder: FormBuilder,
     private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      fname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
        
      ])),
      
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
        
      ])),
      
    }, 
      
    );
  }

  ngOnInit() {
  }

  view(){
    console.log(this.user)
    this.http.post<any>("http://localhost:8086/getUserId",this.user)
      .subscribe(data=>{
        if(data.status=='FAILURE'){
          alert(data.message);
          this.router.navigate(['register'])
        }else{
          alert(data.message);
         this.router.navigate(['login'])
        }
      })
  }

}

