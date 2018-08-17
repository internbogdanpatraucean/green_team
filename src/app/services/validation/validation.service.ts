import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  checkEmptyEmail(email: string): boolean {
    return email === '';
  }
  checkEmptyPassword(pass: string): boolean {
    return pass === '';
  }
}
