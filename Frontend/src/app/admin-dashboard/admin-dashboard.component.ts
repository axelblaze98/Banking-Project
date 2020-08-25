import { Component, OnInit } from '@angular/core';
import { AccountHolderDetails } from '../admin';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private http: HttpClient) { }
  public accounts;

  ngOnInit(): void 
  {
      this.http.get<any>('http://localhost:8086/viewAllAccounts')
      .subscribe(data => 
        {
          console.log(data);
          this.accounts = data;
        })
  };
  public adminObj = new AccountHolderDetails();
  sendAdminRemarks(index){
    this.adminObj.firstName = this.accounts[index].firstName;
    this.adminObj.accountNumber = this.accounts[index].accountNumber;
    this.adminObj.refernceId = this.accounts[index].refernceId;
    
    console.log(this.adminObj)
    this.http.post<any> ('http://localhost:8086/adminApproval', this.adminObj).subscribe(
      data => {console.log(data)
      if (data.status=="SUCCESS")
      {
        alert(data.message);
      }
    }
)
  }  
}