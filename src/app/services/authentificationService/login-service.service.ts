import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { api } from '../apiUrl';
import { User } from '../../components/shared/authentification/login/user.model';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClient) {}

  login(user: User): Observable<User> {
    return this.http.post<User>(api.login, user).pipe(
      map((res: Response ) => {
        console.log(res.status);
        return res;
      }),
      catchError(this.handleError<User>('loginUser'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
