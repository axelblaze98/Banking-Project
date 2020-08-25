import { Component, OnInit } from '@angular/core';
import { AccountHolderDetails } from '../admin';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private http: HttpClient) { }
  public accounts;
  
  ngOnInit(): void {
    this.http.get<AccountHolderDetails>('http://localhost:8086/viewAllAccounts')
      .subscribe(data => 
        {
          console.log(data);
          this.accounts = data;
        })
  };
  sendAdminRemarks(){

  }

}
