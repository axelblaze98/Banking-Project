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
  constructor() { }

  ngOnInit(): void {
  }

  ref = sessionStorage.getItem('referenceId')
  approval = sessionStorage.getItem('adminApproved')
  remark = sessionStorage.getItem('adminRemark')
  accNo = sessionStorage.getItem('accNumber')
  

}
