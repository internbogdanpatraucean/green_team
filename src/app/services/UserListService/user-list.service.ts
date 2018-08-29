import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { api } from '../apiUrl';
import { User } from '../../components/admin/user-list/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(api.allUsers);
  }

  deleteUser(user: User): Observable<User> {
    const id = typeof User === 'number' ? user : user.id;
    const url = `${api.allUsers}/${id}`;
    return this.http.delete<User>(url);
  }

  editUser(user: User): Observable<any> {
    const id = typeof User === 'number' ? user : user.id;
    const url = `${api.allUsers}/${id}`;
    const usr = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    };
    return this.http.put(url, usr);
  }

  changeUserRole(user: User): Observable<any> {
    const id = typeof User === 'number' ? user : user.id;
    const url = `${api.allUsers}/${id}`;
    console.log(user.admin);
    const usr = {
      admin: user.admin
    };
    return this.http.put(url, usr);
  }
}
