import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accountmainpage',
  templateUrl: './accountmainpage.component.html',
  styleUrls: ['./accountmainpage.component.css']
})
export class AccountmainpageComponent implements OnInit {

  constructor(private http : HttpClient) { }

  miniStatement
  accountNumber
  accountBalance
  accountHolderName

  ngOnInit(): void {
    this.accountNumber=sessionStorage.getItem('AccountNumber')
    this.http.get<any>("http://localhost:8086/viewUserDetails/"+this.accountNumber)
    .subscribe(
      data => {console.log(data)
        this.accountBalance = data.accountBalance;
        this.accountHolderName = data.firstName+" "+data.lastName
      }
    )
    this.http.get<any>("http://localhost:8086/miniStatement/"+this.accountNumber)
    .subscribe(
      data => {console.log(data)
        this.miniStatement = data
      }
    )

  }
}
