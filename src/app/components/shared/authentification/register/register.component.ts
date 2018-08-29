import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../../../../services/validation/validation.service';
import { NewUser } from './NewUser.model';
import { RegisterService } from '../../../../services/RegisterService/register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public isTermsChecked = false;
  public tempTerms = true;
  public passType = 'password';

  newUser: NewUser;

  public errorMessage = {
    isEmailEmpty: false,
    isEmailValid: true,
    isPasswordEmpty: false,
    isPasswordValid: true,
    isFirstNameEmpty: false,
    isFirstNameValid: true,
    isLastNameEmpty: false,
    isLastNameValid: true,
    isGenericError: false,
    first_name_msg: '',
    last_name_msg: '',
    email_msg: '',
    password_msg: '',
    genericErr_msg: 'O eroare generica nonoonon'
  };

  constructor(private validation: ValidationService,
              private register: RegisterService) {
    this.newUser = new NewUser();
  }

  ngOnInit() {}

  setTerms(e) {
    this.isTermsChecked = e.target.checked;
  }

  showHidePassword() {
    if (this.passType === 'text') {
        this.passType = 'password';
      } else {
        this.passType = 'text';
      }
  }

  validateData() {
    if (this.validation.checkEmpty(this.newUser.first_name) || this.validation.isOnlySpaces(this.newUser.first_name)) {
      this.errorMessage.isFirstNameEmpty = true;
      this.errorMessage.first_name_msg = 'required';
    } else {
      this.errorMessage.isFirstNameEmpty = false;
    }

    if (this.validation.checkEmpty(this.newUser.last_name) || this.validation.isOnlySpaces(this.newUser.last_name)) {
      this.errorMessage.isLastNameEmpty = true;
      this.errorMessage.last_name_msg = 'required';
    } else {
      this.errorMessage.isLastNameEmpty = false;
    }

    if (this.validation.checkEmpty(this.newUser.email) || this.validation.isOnlySpaces(this.newUser.email)) {
      this.errorMessage.isEmailEmpty = true;
      this.errorMessage.email_msg = 'required';
    } else {
      this.errorMessage.isEmailEmpty = false;
    }

    if (this.validation.checkEmpty(this.newUser.password) || this.validation.isOnlySpaces(this.newUser.password)) {
      this.errorMessage.isPasswordEmpty = true;
      this.errorMessage.password_msg = 'required';
    } else {
      this.errorMessage.isPasswordEmpty = false;
    }


    if (!this.validation.isLetter(this.newUser.first_name) && !this.errorMessage.isFirstNameEmpty) {
      this.errorMessage.isFirstNameValid = false;
      this.errorMessage.first_name_msg = 'only characters allowed';
    } else {
      this.errorMessage.isFirstNameValid = true;
    }

    if (!this.validation.isLetter(this.newUser.last_name) && !this.errorMessage.isLastNameEmpty) {
      this.errorMessage.isLastNameValid = false;
      this.errorMessage.last_name_msg = 'only characters allowed';
    } else {
      this.errorMessage.isLastNameValid = true;
    }

    if (!this.validation.isEmailValid(this.newUser.email) && !this.errorMessage.isEmailEmpty) {
      this.errorMessage.email_msg = 'email not valid';
      this.errorMessage.isEmailValid = false;
    } else {
      this.errorMessage.isEmailValid = true;
    }

    if (!this.validation.isPasswordValid(this.newUser.password) && !this.errorMessage.isPasswordEmpty) {
      this.errorMessage.password_msg = 'weak password';
      this.errorMessage.isPasswordValid = false;
     } else {
       this.errorMessage.isPasswordValid = true;
     }

     this.tempTerms = this.isTermsChecked;
    }

  createUser() {
    this.validateData();
    if (!this.errorMessage.isFirstNameEmpty && !this.errorMessage.isLastNameEmpty && !this.errorMessage.isEmailEmpty
      && !this.errorMessage.isPasswordEmpty && this.isTermsChecked && this.errorMessage.isFirstNameValid
      && this.errorMessage.isLastNameValid && this.errorMessage.isEmailValid) {
      console.log('tat ii bun');
      this.register.register(this.newUser);
    } else {
      console.log('nu-i bun');
    }
  }
}
