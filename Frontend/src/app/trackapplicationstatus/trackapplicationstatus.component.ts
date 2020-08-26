import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trackapplicationstatus',
  templateUrl: './trackapplicationstatus.component.html',
  styleUrls: ['./trackapplicationstatus.component.css']
})
export class TrackapplicationstatusComponent implements OnInit {
  
  loginForm: FormGroup;
  public refId:String;
  public account;

  error_messages = {
    'fname': [
      { type: 'required', message: 'Reference ID is required' },
    ]}
  constructor(private http: HttpClient, public formBuilder: FormBuilder, private router:Router)
   {
    this.loginForm = this.formBuilder.group({
      fname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(5)
      ]))
    },
    ); 
    }

  ngOnInit(): void {
  }

  view(){
    console.log(this.refId)
    this.http.get<any>("http://localhost:8086/viewAccountByRefId/"+this.refId)
      .subscribe(data=>{
        this.account = data;
        this.router.navigate(['trackaccount'])
      })
    }

}
