import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { api } from '../apiUrl';
import { UserIsResetting } from './../../components/shared/authentification/reset/userIsResetting.model';

@Injectable({
  providedIn: 'root'
})
export class ResetService {
  constructor(private http: HttpClient) {}

  sendEmail(email: string) {
    console.log(email);
    const eml = {
      email: email
    };
    return this.http.post<string>(api.resetSendEmail, eml).pipe(
      map((res) => {
        return res;
      }),
      catchError(this.handleError<string>('sendResetEmail'))
    );
  }

  private handleError<T>(operation = 'operation') {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return throwError(error);
    };
  }
}
