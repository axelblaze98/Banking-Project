import { Component, OnInit } from '@angular/core';
import { TransactionHistory } from './../admin';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transactionhistory',
  templateUrl: './transactionhistory.component.html',
  styleUrls: ['./transactionhistory.component.css']
})
export class TransactionhistoryComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  transHis = new TransactionHistory()
  AccNo=sessionStorage.getItem('AccountNumber');
  toDate:string;
  fromDate:string;
  transDetails;

  transHistory(){
    this.transHis.fromDate= this.fromDate;
    this.transHis.toDate= this.toDate;
    this.transHis.accountNumber= this.AccNo;
    this.http.post<any>("http://localhost:8086/transactionHistory",this.transHis)
    .subscribe(data=>{
      console.log(data)
      this.transDetails = data;
    })
  }
}
