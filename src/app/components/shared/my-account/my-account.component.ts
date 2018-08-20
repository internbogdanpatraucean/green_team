import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/services/validation/validation.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {


  tempUserName = '';
  tempUserEmail = '';
  tempUserPass = '';

  isDataValid = false;
  uploadPicture = false;

  userAccount = {
    profilePic : '../../../../assets/profile_pic.png',
    userFirstName: 'Marcel',
    userLastName: 'Morcov',
    userPassword: '1233@Avsase',
    userEmail: 'bogyp@yahoo.com',
    coursePoints: 0
  };

  errorMessage = {
    isNameEmpty: false,
    isNameValid: true,
    isPassEmpty: false,
    isPassValid: true,
    isEmailEmpty: false,
    isEmailValid: true,
    name_msg: '',
    pass_msg: '',
    email_msg: ''
  };

  constructor(private validation: ValidationService) {
    this.initUserData();
   }

  ngOnInit() {
  }

  getName() {
    const name = this.tempUserName.split(' ', 3);
    this.userAccount.userFirstName = name[0];
    this.userAccount.userLastName = name[1].concat((name[2] === undefined) ? '' : ' ' + name[2]);
  }

  initUserData() {
    // this data will be loaded from the server
    this.tempUserName = this.userAccount.userFirstName + ' ' + this.userAccount.userLastName;
    this.tempUserPass = this.userAccount.userPassword;
    this.tempUserEmail = this.userAccount.userEmail;
  }

  validateData(): boolean {

    let ok = true;

    if (this.validation.checkEmpty(this.tempUserName)) {
      this.errorMessage.isNameEmpty = true;
      this.errorMessage.name_msg = 'field required';
      ok = false;
    } else {
      this.errorMessage.isNameEmpty = false;
    }

    if (!this.validation.isLetter(this.tempUserName) && !this.errorMessage.isNameEmpty) {
      this.errorMessage.isNameValid = false;
      this.errorMessage.name_msg = 'only characters allowed';
      ok = false;
    } else {
      this.errorMessage.isNameValid = true;
    }

    const name = this.tempUserName.split(' ', 3);

    console.log(name.length);
    if (name.length < 2) {
      this.errorMessage.isNameValid = false;
      this.errorMessage.name_msg = 'first name and last name are needed';
      ok = false;
    } else {
      this.errorMessage.isNameValid = true;
    }

    if (this.validation.checkEmpty(this.tempUserPass)) {
      this.errorMessage.isPassEmpty = true;
      this.errorMessage.pass_msg = 'field required';
      ok = false;
    } else {
      this.errorMessage.isPassEmpty = false;
    }

    if (!this.validation.isPasswordValid(this.tempUserPass) && !this.errorMessage.isPassEmpty) {
      this.errorMessage.isPassValid = false;
      this.errorMessage.pass_msg = 'password is too weak';
      ok = false;
    } else {
      this.errorMessage.isPassValid = true;
    }

    if (this.validation.checkEmpty(this.tempUserEmail)) {
      this.errorMessage.email_msg = 'field required';
      this.errorMessage.isEmailEmpty = true;
      ok = false;
    } else {
      this.errorMessage.isEmailEmpty = false;
    }

    if (!this.validation.isEmailValid(this.tempUserEmail) && !this.errorMessage.isEmailEmpty) {
      this.errorMessage.email_msg = 'required field';
      this.errorMessage.isEmailValid = false;
      ok = false;
    } else {
      this.errorMessage.isEmailValid = true;
    }
    return ok;
  }

  saveNewUserData() {
    if (this.validateData()) {
      this.getName();
      this.userAccount.userPassword = this.tempUserPass;
      this.userAccount.userEmail = this.tempUserEmail;
      // here data will be sent to the server
      this.isDataValid = true;
      setTimeout(() => {
        this.isDataValid = false;
      }, 2000);
     }
  }

  cancelEditUserData() {
    this.initUserData();
  }

  uploadPic() {
    this.uploadPicture = true;
  }

  confirmUpload() {
    const pictureURL = prompt('Please enter picture URL(imgur):');
    if (pictureURL !== '') {
      this.userAccount.profilePic = pictureURL;
    }
  }
}
