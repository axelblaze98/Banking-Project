import { ConnectionService } from './../connection.service';
import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-account-creation-status',
  templateUrl: './account-creation-status.component.html',
  styleUrls: ['./account-creation-status.component.css']
})

    
export class AccountCreationStatusComponent implements OnInit {
  
  // @HostListener('window:beforeunload', ['$event'])
  // // doSomething($event) 
  // // {
  // //   if(this.hasChanges) $event.returnValue='Your data will be lost!';
  // // }
  // doSomething($event) 
  // {
  //    alert("BACK BUTTON PRESSED")
  // }
  //       // console.log("back button pressed")
  constructor(private _connservice : ConnectionService) { }
  accounts;
  ngOnInit(): void {
    this.accounts=this._connservice.accountCreationStatus;
    console.log(this.accounts);
  }
}
