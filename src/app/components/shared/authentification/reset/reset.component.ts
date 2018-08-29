import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/services/validation/validation.service';
import { ResetService } from 'src/app/services/ResetService/reset.service';
import { UserIsResetting } from './userIsResetting.model';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  isUserResetting = false;
  isEmailSentMessage = false;
  passType1 = 'password';
  passType2 = 'password';

  email = '';

  user_resetting: UserIsResetting;


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

  constructor(
    private validation: ValidationService,
    private reset: ResetService
  ) {
    this.user_resetting = new UserIsResetting();
  }

  ngOnInit() {}

  showHidePassword1() {
    if (this.passType1 === 'text') {
      this.passType1 = 'password';
    } else {
      this.passType1 = 'text';
    }
  }

  showHidePassword2() {
    if (this.passType2 === 'text') {
      this.passType2 = 'password';
    } else {
      this.passType2 = 'text';
    }
  }

  validateEmail(): boolean {
    if (
      this.validation.checkEmpty(this.email) ||
      this.validation.isOnlySpaces(this.email)
    ) {
      this.errorMessage.email_msg = 'required';
      this.errorMessage.isEmailEmpty = true;
      return false;
    } else {
      this.errorMessage.isEmailEmpty = false;
      return true;
    }
  }

  validatePassword(): boolean {
    // tslint:disable-next-line:max-line-length
    if (
      this.validation.checkEmpty(this.user_resetting.password) ||
      this.validation.isOnlySpaces(this.user_resetting.password)
    ) {
      this.errorMessage.pass_msg = 'required';
      this.errorMessage.isNewPassEmpty = true;
    } else {
      this.errorMessage.isNewPassEmpty = false;
    }

    // tslint:disable-next-line:max-line-length
    if (
      this.validation.checkEmpty(this.user_resetting.confirmPassword) ||
      this.validation.isOnlySpaces(this.user_resetting.confirmPassword)
    ) {
      this.errorMessage.confirm_pass_msg = 'required';
      this.errorMessage.isConfirmPassEmpty = true;
    } else {
      this.errorMessage.isConfirmPassEmpty = false;
    }

    if (
      !this.validation.isPasswordValid(this.user_resetting.password) &&
      !this.validation.checkEmpty(this.user_resetting.password)
    ) {
      this.errorMessage.pass_msg = 'the password is too weak';
      this.errorMessage.isNewPassValid = false;
    } else {
      this.errorMessage.isNewPassValid = true;
    }

    if (
      this.user_resetting.confirmPassword !==
        this.user_resetting.password &&
      !this.validation.checkEmpty(this.user_resetting.password) &&
      !this.validation.checkEmpty(this.user_resetting.confirmPassword)
    ) {
      this.errorMessage.confirm_pass_msg = 'the passwords does not match';
      this.errorMessage.isConfirmPassValid = false;
      return false;
    } else {
      if (
        !this.validation.checkEmpty(this.user_resetting.password) &&
        !this.validation.checkEmpty(this.user_resetting.confirmPassword)
      ) {
        this.errorMessage.isConfirmPassValid = true;
        return true;
      } else {
        return false;
      }
    }
  }

  onRequestResetPassword() {
    if (this.validateEmail()) {
      this.reset.sendEmail(this.email).subscribe(
        succes => {
          this.errorMessage.generic_msg = 'An email was sent to your adress';
          this.errorMessage.isGenericError = true;
          this.isEmailSentMessage = true;
          // this.isUserResetting = true;
        },
        error => {
          this.errorMessage.generic_msg = error.error;
          this.errorMessage.isGenericError = true;
          this.isEmailSentMessage = false;
        }
      );
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
