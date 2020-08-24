import { Admin } from './admin';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient) { }
  password:String;
  ngOnInit(): void {
  }

  public loginAdmin(user: Admin):Observable<any>
  {
    return this.http.post<any>("http://localhost:8060/loginAdmin", user);
  }

}
  

