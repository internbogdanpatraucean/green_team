import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  checkEmpty(input: string): boolean {
    return input === '';
  }

  isPasswordValid(input: string): boolean {
    const verifier = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
    return verifier.test(input);
   }
}
