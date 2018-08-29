import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { api } from '../apiUrl';
import { throwError } from 'rxjs';
import { Course } from './../../components/shared/course-list/course-list.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) { }

  getCourse(id): Observable<any> {
    return this.http.get<any>(api.category+'/'+ id);
  }
  setCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(api.category ,course);
  }
  // editCategory(category): Observable<Course> {
  //   // debugger
  //   return this.http.put<Course>(api.course, course.id);
  // }
  // deleteCategory(category): Observable<Course[]> {
  //   return this.http.delete<Course[]>(api.category+ '/' + category.id);
  // }
  private handleError<T>(operation = 'operation') {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return throwError(error);
    };
  }
}