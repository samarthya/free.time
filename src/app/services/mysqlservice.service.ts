import { Injectable } from '@angular/core';
import { IPrincipal, IUserProfile, IUser, IDetails } from '../models/user.model';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MysqlserviceService {
  
  constructor(private http: HttpClient,private router: Router) { }

  public register (user: IUserProfile): Observable<any> {
    const request= this.http.post<IUserProfile>('http://localhost:4000/add',user).pipe(
           map((data: IUserProfile)=> {
             return data;
           })
    )
    return request;
  }

  public login(user: IUserProfile): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    const request =this.http.get('http://localhost:4000/login'+user, {headers}).pipe(
      map((data: IUserProfile)=>{
        return data;
      })
    )
    return request;
  }
}
