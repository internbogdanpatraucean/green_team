import { Component, OnInit } from '@angular/core';
import { ValidationService} from 'src/app/services/validation/validation.service';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public person = {
    email: '',
    password: '',
    passType: 'password'
  };

  public errorMessage = {
    isEmailValid: true,
    isPassValid: true,
    isEmailEmpty: true,
    isPassEmpty: true,
    isServerError: false,
    msgEmail: ' ',
    msgPass: ' ',
    msgGeneric: 'Data not found on the server'
  };

  constructor(private validation: ValidationService) {}

  ngOnInit() {
  }

  checkEmailDB(): boolean {
    return this.person.email === 'bogyp@yahoo.com';
  }

  checkPasswordDB(): boolean {
    return this.person.password === '123';
  }

  showHidePassword() {
    if (this.person.passType === 'text') {
        this.person.passType = 'password';
      } else {
        this.person.passType = 'text';
      }
  }

  checkData() {

    if (this.validation.checkEmptyEmail(this.person.email)) {
      this.errorMessage.isEmailEmpty =  true;
      this.errorMessage.msgEmail = 'email required';
    } else {
      this.errorMessage.isEmailEmpty =  false;
    }

    if (this.validation.checkEmptyPassword(this.person.password)) {
      this.errorMessage.isPassEmpty =  true;
      this.errorMessage.msgPass = 'password required';
    } else {
      this.errorMessage.isPassEmpty = false;
    }

    if (!this.checkEmailDB() && !this.validation.checkEmptyEmail(this.person.email)) {
      this.errorMessage.isEmailValid = false;
      this.errorMessage.msgEmail = `email not found |  <a href="/register">Register?</a>`;
    } else {
      this.errorMessage.isEmailValid = true;
    }

    if (!this.checkPasswordDB() && !this.validation.checkEmptyPassword(this.person.password)) {
      this.errorMessage.isPassValid = false;
      this.errorMessage.msgPass = 'password incorrect';
    } else {
      this.errorMessage.isPassValid =  true;
    }
  }
}
