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

   isEmailValid(input: string): boolean {
    const verifier = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}/);
    return verifier.test(input);
  }

  isLetter(input: string): boolean {
    const verifier =  new RegExp(/^[a-zA-Z ]+$/, 'i');
    return verifier.test(input);
  }
}
