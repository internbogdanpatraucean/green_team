import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public person = {
    email: '',
    password: ''
  };
  isEmailValid = true;
  isPassValid  = true;
  constructor() {}

  ngOnInit() {
  }

  checkEmailDB(): boolean {
    return this.person.email === 'bogyp@yahoo.com';
  }

  checkPasswordDB(): boolean {
    return this.person.password === '123';
  }

  checkData() {
    if (!this.checkEmailDB()) {
      this.isEmailValid = false;
    } else {
      this.isEmailValid = true;
    }
    if (!this.checkPasswordDB()) {
      this.isPassValid = false;
    } else {
      this.isPassValid =  true;
    }
  }
}
