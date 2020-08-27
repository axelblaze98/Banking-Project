import { Component, OnInit } from '@angular/core';
import { ConnectionService } from './../connection.service';

@Component({
  selector: 'app-referenceid',
  templateUrl: './referenceid.component.html',
  styleUrls: ['./referenceid.component.css']
})
export class ReferenceidComponent implements OnInit {

  constructor(private service : ConnectionService) { }

  userId
  ngOnInit(): void {
    this.userId = this.service.userIdStatus
  }

}
