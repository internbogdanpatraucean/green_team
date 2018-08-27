import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/services/validation/validation.service';
import { LoginService } from 'src/app/services/authentificationService/login-service.service';
import { User } from './user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  passType = 'password';
  user: User;

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
    private loginService: LoginService,
    private router: Router
  ) {
    this.user = new User();
  }

  ngOnInit() {}

  showHidePassword() {
    if (this.passType === 'text') {
      this.passType = 'password';
    } else {
      this.passType = 'text';
    }
  }

  onLogin() {
    if (this.checkData()) {
      this.loginService.login(this.user).subscribe(res => {
        console.log(res);
        if (!res) {
          this.errorMessage.isEmailValid = false;
          this.errorMessage.isPassValid = false;
          this.errorMessage.msgEmail = `email or password incorrect`;
        } else {
          this.errorMessage.isEmailValid = true;
          this.errorMessage.isPassValid = true;

          localStorage.clear();
          localStorage.setItem('user_token', res.token);
          this.router.navigate(['/dashboard']);
        }
      });
    } else {
      localStorage.clear();
      // log in rejected
    }
  }

  checkData(): boolean {
    let ok = true;
    if (this.validation.checkEmpty(this.user.email)) {
      this.errorMessage.isEmailEmpty = true;
      this.errorMessage.msgEmail = 'email required';
      ok = false;
    } else {
      this.errorMessage.isEmailEmpty = false;
    }

    if (this.validation.checkEmpty(this.user.password)) {
      this.errorMessage.isPassEmpty = true;
      this.errorMessage.msgPass = 'password required';
      ok = false;
    } else {
      this.errorMessage.isPassEmpty = false;
    }
    return ok;
  }
}
