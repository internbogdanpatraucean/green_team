import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { api } from '../apiUrl';
import { NewUser } from '../../components/shared/authentification/register/NewUser.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(user: NewUser): Observable<NewUser> {
    return this.http.post<NewUser>(api.register, user).pipe(
      map((res: Response ) => {
        console.log(res.status);
        return res;
      }),
      catchError(this.handleError<NewUser>('registerUser'))
    );
  }

  private handleError<T> (operation = 'operation') {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return throwError(error);
    };
  }
}
