import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { DUMMY_USER_PROFILE, Logger } from '@free-time/components/index';
import { IUserProfile, IPrincipal,IUser } from '@free-time/models/user.model';

/**
 * Singleton instance for the login service.
 */
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //private baseLoginURL = 'api/login';
  private baseLoginURL = 'http://localhost:4000/login'
  constructor(private http: HttpClient, private logger: Logger) {

  }

  /**
   * <p>
   * Handle Http operation that failed.
   * Let the app continue.
   * </p>
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   * <br/>
   * More information <a href="https://angular.io/tutorial/toh-pt6"> here </a>
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: better job of transforming error for user consumption
      this.logger.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /**
   * Loging capability exposed.
   * It takes in argument as IUserProfile
   */
  doLogin(): Observable<IUserProfile|any> {
    return this.http.get<IUserProfile>(this.baseLoginURL).pipe(
      tap(_ => this.logger.log(' Login called.')),
      catchError(this.handleError<IUserProfile[]>('login', []))
    );
  }

  public getBasicHeader(userName: string, password: string) {
    const authorizationData: string = 'Basic ' + btoa(userName + ':' + password);

    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': authorizationData,
      })
    };

  }

  public isAuthorized(): Observable<IUserProfile> {
    return null;
  }

    //public loginUser(userName: string, password: string): Observable<IUserProfile> {
    public loginUser(input: IPrincipal): Observable<IUserProfile> {
      //return this.http.post(this.baseLoginURL,JSON.stringify(this.input), this.getBasicHeader(userName,password)).pipe(
      return this.http.post(this.baseLoginURL,JSON.stringify(input), this.getBasicHeader(input.email, input.password)).pipe(
        tap((user: IUserProfile) => {
        console.log(' User logged in ' + JSON.stringify(user.profile.name));
        console.log('lastName is '+ JSON.stringify(user.profile.lastName));
        return user;
      })
    ).pipe(catchError(err => {
      // TODO: Handle the error properly.
      return of( DUMMY_USER_PROFILE );
     // return this.http.get<IUserProfile>("http://localhost:4000/get/"+input.email)
    }));
  }
  /**
   * Returns the base login URL
   */
  public get baseURL(): string {
    return this.baseLoginURL;
  }
}
