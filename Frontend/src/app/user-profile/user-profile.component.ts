import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { userDetails } from './../admin';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor( private http: HttpClient,private router: Router
    ) { }

    user = new userDetails();
    accNumber = sessionStorage.getItem("AccountNumber") //fetched from sessionstorage
    
  ngOnInit(): void {
    this.http.get<any>("http://localhost:8086/viewUserDetails/"+this.accNumber) //fetching account number for current sezzzzzzzzzzzzzzzzzzzzzzzzz
    .subscribe(
      data => {
        this.user = data
      }
      
)
}
}
