
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AccountHolderDetails } from './admin';


@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient,private router: Router) { }
  accountCreationStatus:AccountHolderDetails;
  ngOnInit(): void {
  }

  getAccountStatusDetails(refId): Observable<any>
  {
    return this.http.get<any>("http://localhost:8086/viewAccountByRefId/"+refId)
  }


  setApplicationStatus(data)
  {
    this.accountCreationStatus = data;
    this.router.navigate(['trackaccount']);
  }

  

}
  

