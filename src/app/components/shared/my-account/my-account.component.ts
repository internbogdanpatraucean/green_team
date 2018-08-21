import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/services/validation/validation.service';
import { StartedCourse } from './my-account-courses.model';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  tempUserName = '';
  tempUserEmail = '';
  tempUserPass = '';
  tempProfilePic = '';

  isDataValid = false;
  uploadPicture = false;
  uploadPictureState = 'Chose file';

  userAccount = {
    profilePic : '../../../../assets/profile_pic.png',
    userFirstName: 'Marcel',
    userLastName: 'Morcov',
    userPassword: '1233@Avsase',
    userEmail: 'bogyp@yahoo.com',
  };

  errorMessage = {
    isNameEmpty: false,
    isNameValid: true,
    isEntireName: true,
    isPassEmpty: false,
    isPassValid: true,
    isEmailEmpty: false,
    isEmailValid: true,
    name_msg: '',
    pass_msg: '',
    email_msg: ''
  };

  started_courses: StartedCourse[] = [
    new StartedCourse('../../../../assets/course_img1.jpg', 'Title 1: How to do a joke', 'Here you can try to learn', 10, 59, 1),
    new StartedCourse('../../../../assets/course_img3.jpg', 'Title 2: How to take care of dogs', 'Here you can try to learn', 100, 32, 2),
    new StartedCourse('../../../../assets/course_img4.jpg', 'Title 3: How to do learn Angular', 'Here you can try to learn', 50, 158, 3),
    new StartedCourse('../../../../assets/course_img5.jpg', 'Title 4: Nothing to learn here', 'Here you can try to learn', 83, 0, 4)
  ];

  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;

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

    if (name.length < 2 && !this.errorMessage.isNameEmpty) {
      this.errorMessage.isEntireName = false;
      this.errorMessage.name_msg = 'first name and last name are needed';
      ok = false;
    } else {
      this.errorMessage.isEntireName = true;
      console.log(name.length);
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
      this.errorMessage.email_msg = 'invalid email';
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
    if (this.uploadPicture === false) {
      this.uploadPicture = true;
      this.uploadPictureState = 'Upload file';
    } else {
      this.uploadPicture = false;
      this.uploadPictureState = 'Chose file';
    }
  }

  confirmUpload() {
    if (this.tempProfilePic !== '') {
      this.uploadPicture = false;
      this.userAccount.profilePic = this.tempProfilePic;
    }
  }

  closeCourse(course: StartedCourse) {
   this.started_courses.splice(this.started_courses.indexOf(course), 1);

   // delete it also from the database
  }
}
