import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/services/validation/validation.service';
import { LoginServiceService } from 'src/app/services/authentificationService/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  tempEmail = '';
  tempPass = '';

  public person = {
    email: '',
    password: '',
    passType: 'password'
  };

  public errorMessage = {
    isEmailValid: true,
    isPassValid: true,
    isEmailEmpty: false,
    isPassEmpty: false,
    isServerError: false,
    msgEmail: ' ',
    msgPass: ' ',
    msgGeneric: 'Data not found on the server'
  };

  constructor(
    private validation: ValidationService,
    private loginService: LoginServiceService
  ) {}

  ngOnInit() {}

  checkEmailDB(): boolean {
    // if this exists, request to server
    return this.person.email === 'bogyp@yahoo.com';
  }

  checkPasswordDB(): boolean {
    // if this exists, request to server
    return this.person.password === '123';
  }

  showHidePassword() {
    if (this.person.passType === 'text') {
      this.person.passType = 'password';
    } else {
      this.person.passType = 'text';
    }
  }

  onLogin() {
    if (!this.checkData()) {
      this.loginService.login(this.person).subscribe(response => {
        console.log('raspunsul' + response);
      });
    } else {
      console.log('logare respinsa');
    }
  }

  checkData(): boolean {
    let ok = true;
    if (this.validation.checkEmpty(this.person.email)) {
      this.errorMessage.isEmailEmpty = true;
      this.errorMessage.msgEmail = 'email required';
      ok = false;
    } else {
      this.errorMessage.isEmailEmpty = false;
    }

    if (this.validation.checkEmpty(this.person.password)) {
      this.errorMessage.isPassEmpty = true;
      this.errorMessage.msgPass = 'password required';
      ok = false;
    } else {
      this.errorMessage.isPassEmpty = false;
    }

    if (!this.checkEmailDB() && !this.errorMessage.isEmailEmpty) {
      this.errorMessage.isEmailValid = false;
      this.errorMessage.msgEmail = `email not found |  <a href="/register">Register?</a>`;
      ok = false;
    } else {
      this.errorMessage.isEmailValid = true;
    }

    if (!this.checkPasswordDB() && !this.errorMessage.isPassEmpty) {
      this.errorMessage.isPassValid = false;
      this.errorMessage.msgPass = 'password incorrect';
      ok = false;
    } else {
      this.errorMessage.isPassValid = true;
    }
    return ok;
  }
}
