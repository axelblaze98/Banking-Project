import { Component, OnInit } from '@angular/core';
import { ConnectionService } from './../connection.service';
import { FundsDataClass } from '../admin';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afterconfirmtransaction',
  templateUrl: './afterconfirmtransaction.component.html',
  styleUrls: ['./afterconfirmtransaction.component.css']
})
export class AfterconfirmtransactionComponent implements OnInit {

  constructor(private _connservice : ConnectionService, private http: HttpClient, private router: Router) { }

  fundsData;

  ngOnInit(): void {
    this.fundsData = this._connservice.fundTransferData;
  }

  confirmTrans(){
    return this.http.post<any> ('http://localhost:8086/transaction', this.fundsData)
    .subscribe(
      data => {
        console.log(data)
        if(data.status=="FAILURE"){
          alert(data.message)
        }else{
          alert(data.message)
          this.router.navigate(['accountmainpage'])
        }
      })
    }
    cancelTrans(){
      alert("Transaction cancelled")
      this.router.navigate(['fundtransfer'])
    }
}
