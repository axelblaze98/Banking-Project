import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-creation-status',
  templateUrl: './account-creation-status.component.html',
  styleUrls: ['./account-creation-status.component.css']
})
export class AccountCreationStatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ref = sessionStorage.getItem('referenceId')
  approval = sessionStorage.getItem('adminApproved')
  remark = sessionStorage.getItem('adminRemark')
  accNo = sessionStorage.getItem('accNumber')
  

}
