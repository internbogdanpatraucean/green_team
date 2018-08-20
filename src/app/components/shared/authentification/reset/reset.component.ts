import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/services/validation/validation.service';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  isUserResetting = false;
  isEmailSentMessage = false;

  public resetPassword = {
    userEmail: '',
    userNewPassword: '',
    userConfirmPassword: ''
  };

  errorMessage = {
    isEmailEmpty: false,
    isEmailValid: false,
    isNewPassEmpty: false,
    isNewPassValid: false,
    isConfirmPassEmpty: false,
    isConfirmPassValid: false,
    isGenericError: false,
    email_msg: '',
    pass_msg: '',
    confirm_pass_msg: '',
    generic_msg: ''
  };

  constructor(private validation: ValidationService) {}

  ngOnInit() {}

  isEmailExisting(): boolean {
    // process request to the server
    return this.resetPassword.userEmail === 'bogyp@yahoo.com';
  }

  validateEmail(): boolean {
    if (this.validation.checkEmpty(this.resetPassword.userEmail)) {
      this.errorMessage.email_msg = 'required';
      this.errorMessage.isEmailEmpty = true;
      return false;
    } else {
      this.errorMessage.isEmailEmpty = false;
      if (!this.isEmailExisting()) {
        this.errorMessage.email_msg = 'email not found in our database';
        this.errorMessage.isEmailValid = false;
        return false;
      } else {
        return true;
      }
    }
  }

  validatePassword(): boolean {
    if (this.validation.checkEmpty(this.resetPassword.userNewPassword)) {
      this.errorMessage.pass_msg = 'required';
      this.errorMessage.isNewPassEmpty = true;
    } else {
      this.errorMessage.isNewPassEmpty = false;
    }

    if (this.validation.checkEmpty(this.resetPassword.userConfirmPassword)) {
      this.errorMessage.confirm_pass_msg = 'required';
      this.errorMessage.isConfirmPassEmpty = true;
    } else {
      this.errorMessage.isConfirmPassEmpty = false;
    }

    if (!this.validation.isPasswordValid(this.resetPassword.userNewPassword)
       && !this.validation.checkEmpty(this.resetPassword.userNewPassword)) {
      this.errorMessage.pass_msg = 'the password is too weak';
      this.errorMessage.isNewPassValid = false;
    } else {
      this.errorMessage.isNewPassValid = true;
    }

      if (
        (this.resetPassword.userConfirmPassword !==
        this.resetPassword.userNewPassword) && !this.validation.checkEmpty(this.resetPassword.userNewPassword)
         && !this.validation.checkEmpty(this.resetPassword.userConfirmPassword)
      ) {
        this.errorMessage.confirm_pass_msg = 'the passwords does not match';
        this.errorMessage.isConfirmPassValid = false;
        return false;
      } else {
        if (!this.validation.checkEmpty(this.resetPassword.userNewPassword)
        && !this.validation.checkEmpty(this.resetPassword.userConfirmPassword)) {
        this.errorMessage.isConfirmPassValid = true;
        return true; } else {return false; }
      }
  }

  onRequestResetPassword() {
    if (this.validateEmail()) {
      this.errorMessage.generic_msg = 'An email was sent to your adress';
      this.errorMessage.isGenericError = true;
      this.isUserResetting = true;
      this.isEmailSentMessage = true;
      // here we will process the request to reset
      console.log('validare email ok');
    } else {
      console.log('validare email fara succes');
    }
  }

  onResetPassword() {
    if (this.validatePassword()) {
      console.log('tat ii ok la parola');
    } else {
      console.log('ceva nu-i ok la resetul parolei');
    }
  }
}
