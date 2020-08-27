import { AccountHolderDetails } from './admin';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient) { }
 
  ngOnInit(): void {
  }

  getNames(): Observable<AccountHolderDetails[]>
  {
    return this.http.get<AccountHolderDetails[]>('http://localhost:8086/viewAllAccounts');

  }

}
  

