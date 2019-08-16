import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Logger } from '@free-time/components/log.service';
import { tap, catchError } from 'rxjs/operators';


/**
 * Singleton instance for the login service.
 */
@Injectable({
  providedIn: 'root'
})
export class GitService {

  private baseGitURL = 'zen';
  private zen = 'zen';
  constructor(private http: HttpClient, private logger: Logger) {

  }

  headers: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'text/html,application/xhtml+xml,application/xml',
      // tslint:disable-next-line: max-line-length
      'User-Agent': 'my agent'
    }),
    reportProgress: true,
    responseType: 'text' as 'json'
  };


  public getZen(): Observable<any> {
    return this.http.get(this.baseGitURL, this.httpOptions);
  }
}
