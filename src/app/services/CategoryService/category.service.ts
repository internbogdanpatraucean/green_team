import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { catchError, map, tap } from 'rxjs/operators';
// import { throwError } from 'rxjs';
import { api } from '../apiUrl';
import { throwError } from 'rxjs';
import { Category } from './../../components/dashboard/dashboard.model';
// import {afterEdit} from './../../components/dashboard/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(api.category);
  }
  setCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(api.category, category);
  }
  editCategory(category): Observable<Category> {
    // debugger
    return this.http.put<Category>(api.category, category.id);
  }
  deleteCategory(category): Observable<Category[]> {
    return this.http.delete<Category[]>(api.category+ '/' + category.id);
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
