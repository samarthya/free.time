import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Logger } from './shared';
import { Observable, of } from 'rxjs';
import { IUserProfile } from './models/user.model';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseLoginURL = 'api/login';

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
}
