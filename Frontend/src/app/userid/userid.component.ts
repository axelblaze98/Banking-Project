import { Component, OnInit } from '@angular/core';
import { ConnectionService } from './../connection.service';

@Component({
  selector: 'app-userid',
  templateUrl: './userid.component.html',
  styleUrls: ['./userid.component.css']
})
export class UseridComponent implements OnInit {

  constructor(private servce: ConnectionService) { }

  refId

  ngOnInit(): void {
    this.refId = this.servce.referenceIdStatus
  }

}
