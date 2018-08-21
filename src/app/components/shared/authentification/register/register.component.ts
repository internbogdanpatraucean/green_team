import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../../../../services/validation/validation.service';

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
    passType: 'password',
    agreeWithTerms: true
  };

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

  constructor(private validation: ValidationService) {}

  ngOnInit() {}

  checkFirstNameEmpty(): boolean {
    return this.newUser.first_name === '';
  }

  checkLastNameEmpty(): boolean {
    return this.newUser.last_name === '';
  }

  setTerms(e) {
    this.isTermsChecked = e.target.checked;
    this.newUser.agreeWithTerms = e.target.checked;
  }

  showHidePassword() {
    if (this.newUser.passType === 'text') {
        this.newUser.passType = 'password';
      } else {
        this.newUser.passType = 'text';
      }
  }

  isLetter(input: string): boolean {
    const verifier =  new RegExp(/^[A-Za-z]/, 'i');
    return verifier.test(input);
  }

  isEmailValid(input: string): boolean {
    const verifier = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}/);
    console.log(input);
    console.log(verifier.test(input));
    return verifier.test(input);
  }



  validateData() {
    if (this.checkFirstNameEmpty()) {
      this.errorMessage.isFirstNameEmpty = true;
      this.errorMessage.first_name_msg = 'required';
    } else {
      this.errorMessage.isFirstNameEmpty = false;
    }

    if (this.checkLastNameEmpty()) {
      this.errorMessage.isLastNameEmpty = true;
      this.errorMessage.last_name_msg = 'required';
    } else {
      this.errorMessage.isLastNameEmpty = false;
    }

    if (this.validation.checkEmpty(this.newUser.email)) {
      this.errorMessage.isEmailEmpty = true;
      this.errorMessage.email_msg = 'required';
    } else {
      this.errorMessage.isEmailEmpty = false;
    }

    if (this.validation.checkEmpty(this.newUser.password)) {
      this.errorMessage.isPasswordEmpty = true;
      this.errorMessage.password_msg = 'required';
    } else {
      this.errorMessage.isPasswordEmpty = false;
    }

    this.newUser.agreeWithTerms = this.isTermsChecked;

    if (!this.isLetter(this.newUser.first_name) && !this.errorMessage.isFirstNameEmpty) {
      this.errorMessage.isFirstNameValid = false;
      this.errorMessage.first_name_msg = 'only characters allowed';
    } else {
      this.errorMessage.isFirstNameValid = true;
    }

    if (!this.isLetter(this.newUser.last_name) && !this.errorMessage.isLastNameEmpty) {
      this.errorMessage.isLastNameValid = false;
      this.errorMessage.last_name_msg = 'only characters allowed';
    } else {
      this.errorMessage.isLastNameValid = true;
    }

    if (!this.isEmailValid(this.newUser.email) && !this.errorMessage.isEmailEmpty) {
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
  }

  createUser() {
    this.validateData();
    if (!this.errorMessage.isFirstNameEmpty && !this.errorMessage.isLastNameEmpty && !this.errorMessage.isEmailEmpty
      && !this.errorMessage.isPasswordEmpty && this.newUser.agreeWithTerms && this.errorMessage.isFirstNameValid
      && this.errorMessage.isLastNameValid && this.errorMessage.isEmailValid) {
      console.log('tat ii bun');
      // send data to the server
    } else {
      console.log('nu-i bun');
    }
  }
}
