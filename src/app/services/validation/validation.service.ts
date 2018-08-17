import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  checkEmpty(input: string): boolean {
    return input === '';
  }
}
