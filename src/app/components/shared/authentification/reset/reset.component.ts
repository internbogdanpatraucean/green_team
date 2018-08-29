import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../../../../services/validation/validation.service';

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
    userConfirmPassword: '',
    passType1: 'password',
    passType2: 'password'
  };

  errorMessage = {
    isEmailEmpty: false,
    isEmailValid: true,
    isNewPassEmpty: false,
    isNewPassValid: true,
    isConfirmPassEmpty: false,
    isConfirmPassValid: true,
    isGenericError: false,
    email_msg: '',
    pass_msg: '',
    confirm_pass_msg: '',
    generic_msg: ''
  };

  constructor(private validation: ValidationService) {}

  ngOnInit() {}

  showHidePassword1() {
       if (this.resetPassword.passType1 === 'text') {
        this.resetPassword.passType1 = 'password';
      } else {
        this.resetPassword.passType1 = 'text';
      }
  }

  showHidePassword2() {
    if (this.resetPassword.passType2 === 'text') {
     this.resetPassword.passType2 = 'password';
   } else {
     this.resetPassword.passType2 = 'text';
   }
}

  isEmailExisting(): boolean {
    // process request to the server
    return this.resetPassword.userEmail === 'bogyp@yahoo.com';
  }

  validateEmail(): boolean {
    if (this.validation.checkEmpty(this.resetPassword.userEmail) || this.validation.isOnlySpaces(this.resetPassword.userEmail)) {
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
    // tslint:disable-next-line:max-line-length
    if (this.validation.checkEmpty(this.resetPassword.userNewPassword) || this.validation.isOnlySpaces(this.resetPassword.userNewPassword)) {
      this.errorMessage.pass_msg = 'required';
      this.errorMessage.isNewPassEmpty = true;
    } else {
      this.errorMessage.isNewPassEmpty = false;
    }

    // tslint:disable-next-line:max-line-length
    if (this.validation.checkEmpty(this.resetPassword.userConfirmPassword) || this.validation.isOnlySpaces(this.resetPassword.userConfirmPassword)) {
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
