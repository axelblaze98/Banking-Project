import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { AddBeneficiary } from './../admin';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent implements OnInit {


  user= new AddBeneficiary();
  nickname;

  AccNo=sessionStorage.getItem('AccountNumber');
  AddBenef(){
    this.user.userAcNumber=this.AccNo;
    console.log(this.user)
    this.http.post<any>("http://localhost:8086/addBeneficiary", this.user)
    .subscribe(
      data => {console.log(data)
      if (data.status=="FAILURE")
      {
        if(data.message == "Beneficiary Account does not exist")
        {
          alert(data.message)
        }
        else
        {
          alert(data.message)
        }
      }
      else{
        alert("Beneficiary successfully added!")
      }
    }
)
  }

  loginForm: FormGroup;
  error_messages = {
    'fname': [
      { type: 'required', message: 'Beneficiary Name is required.' },
    ],
    'bename': [
      { type: 'required', message: 'Beneficiary Nickname is required.' },
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
  constructor( public formBuilder: FormBuilder, private http: HttpClient,private router: Router
    ) { 
    this.loginForm = this.formBuilder.group({
      fname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      bename: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
       
      
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
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
