import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/services/validation/validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public isTermsChecked = false;

  public newUser = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    agreeWithTerms: true
  };

  public errorMessage = {
    isEmailEmpty: true,
    isEmailValid: true,
    isPasswordEmpty: true,
    isPasswordValid: true,
    isFirstNameEmpty: true,
    isFirstNameValid: true,
    isLastNameEmpty: true,
    isLastNameValid: true,
    isGenericError: false,
    first_name_msg: '',
    last_name_msg: '',
    email_msg: '',
    password_msg: '',
    genericErr_msg: 'O eroare generica nonoonon'
  };

  constructor(private validation: ValidationService) { }

  ngOnInit() {
  }

  checkFirstNameEmpty(): boolean {
    return this.newUser.first_name === '';
  }

  checkLastNameEmpty(): boolean {
    return this.newUser.last_name === '';
  }

  setTerms(e) {
    this.isTermsChecked =  e.target.checked;
    this.newUser.agreeWithTerms = e.target.checked;
  }



  validateData() {
    if (this.checkFirstNameEmpty()) {
      this.errorMessage.isFirstNameEmpty = true;
      this.errorMessage.first_name_msg = 'required';
    } else {
      this.errorMessage.isFirstNameEmpty = false;
    }

    if (this.checkLastNameEmpty()) {
      this.errorMessage.isLastNameEmpty =  true;
      this.errorMessage.last_name_msg = 'required';
    } else {
      this.errorMessage.isLastNameEmpty = false;
    }

    if (this.validation.checkEmptyEmail(this.newUser.email)) {
      this.errorMessage.isEmailEmpty = true;
      this.errorMessage.email_msg = 'required';
    } else {
      this.errorMessage.isEmailEmpty =  false;
    }

    if (this.validation.checkEmptyPassword(this.newUser.password)) {
      this.errorMessage.isPasswordEmpty = true;
      this.errorMessage.password_msg = 'required';
    } else {
      this.errorMessage.isPasswordEmpty = false;
    }

    this.newUser.agreeWithTerms = this.isTermsChecked;
  }

  createUser() {
    this.validateData();

    // send data to the server
  }
}
