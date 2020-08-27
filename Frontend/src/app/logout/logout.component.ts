import { ConnectionService } from './../connection.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _connservice : ConnectionService) { }

  ngOnInit(): void {
    this._connservice.getNames().subscribe(data=> this.names = data)
  }
public names=[];
}
