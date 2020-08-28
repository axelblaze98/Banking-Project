import { Component, OnInit } from '@angular/core';
import { ConnectionService } from './../connection.service';

@Component({
  selector: 'app-updatedpassword',
  templateUrl: './updatedpassword.component.html',
  styleUrls: ['./updatedpassword.component.css']
})
export class UpdatedpasswordComponent implements OnInit {

  constructor(private service : ConnectionService) { }
  newPsd
  ngOnInit(): void {
    this.newPsd = this.service.updatedPassword;
  }

}
