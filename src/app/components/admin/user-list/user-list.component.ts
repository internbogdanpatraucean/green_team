import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { ValidationService } from '../../../services/validation/validation.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  isDataSaved = false;

  public TempUser = {
    Username: '',
    Email: ''
  };

  public ErrorMessages = {
    isNameEmpty: false,
    isNameValid: true,
    isEntireName: true,
    isEmailEmpty: false,
    isEmailValid: true,
    name_msg: '',
    email_msg: ''
  };

  constructor(private validation: ValidationService) { }

  userList: User[] = [
    new User(1, 'Marcel', 'Pavel', 'email1@gmail.com', '../../../../assets/profile_pic.png', '22 AUG 2018', '12,500', false),
    new User(2, 'Marcel', 'Pavelescu', 'email2@gmail.com', '../../../../assets/profile_pic.png', '22 AUG 2018', '8,000', false),
    new User(3, 'Mircea', 'Pavel', 'email3@gmail.com', '../../../../assets/profile_pic.png', '22 AUG 2018', '25,500', true),
    new User(4, 'Marcel', 'Paul', 'email4@gmail.com', '../../../../assets/profile_pic.png', '22 SEP 2018', '3,500', false),
    new User(5, 'Marele', 'Pavel', 'emaiassil5@gmail.com', '../../../../assets/profile_pic.png', '22 AUG 2018', '12,500', false),
    new User(6, 'Marcel', 'Pavaj', 'email6@gmail.com', '../../../../assets/profile_pic.png', '22 AUG 2018', '12,500', false)
  ];

  ngOnInit() {
  }

  onContextMenuClick(user: User) {
     user.showMenu = !user.showMenu;
  }

  onMouseLeave(user: User) {
    user.showMenu = false;
  }

  changeUserRole(user: User) {
    user.userIsAdmin = !user.userIsAdmin;
    user.userRole = (user.userIsAdmin) ? 'admin' : 'user';
    user.userChangeRole = (user.userIsAdmin) ? 'Make it user' : 'Make it an administrator';
    // request to server
  }

  deleteUser(user: User) {
    this.userList.splice(this.userList.indexOf(user), 1);
    // request to server
  }

  showEdit(user: User) {
    for (const usr of this.userList) {
        usr.userIsEditing = false;
    }
    user.userIsChecked = true;
    user.showEdit = true;
    this.TempUser.Username = user.userName;
    this.TempUser.Email = user.userEmail;
  }

  closeEdit(user: User) {
    for (const usr of this.userList) {
      usr.userIsEditing = true;
  }
  console.log(this.userList);
  user.userIsChecked = false;
  user.showEdit = false;
  this.ErrorMessages.isNameValid = true;
  this.ErrorMessages.isNameEmpty = false;
  this.ErrorMessages.isEntireName = true;
  this.ErrorMessages.isEmailValid = true;
  this.ErrorMessages.isEmailEmpty = false;
  }

  checkUser(user: User) {
    user.userIsChecked = !user.userIsChecked;
  }

  validateEditData(): boolean {
    let ok = true;

    if (this.validation.checkEmpty(this.TempUser.Username)) {
      this.ErrorMessages.name_msg = 'field required';
      this.ErrorMessages.isNameEmpty = true;
      ok = false;
    } else {
      this.ErrorMessages.isNameEmpty = false;
    }

    if (this.validation.isEntireName(this.TempUser.Username) && !this.ErrorMessages.isNameEmpty) {
      this.ErrorMessages.isEntireName = false;
      this.ErrorMessages.name_msg = 'both names required';
      ok = false;
    } else {
      this.ErrorMessages.isEntireName = true;
    }

    if (!this.validation.isLetter(this.TempUser.Username) && !this.ErrorMessages.isNameEmpty) {
      this.ErrorMessages.name_msg = 'only characters allowed';
      this.ErrorMessages.isNameValid = false;
      ok = false;
    } else {
      this.ErrorMessages.isNameValid = true;
    }

    if (this.validation.checkEmpty(this.TempUser.Email)) {
      this.ErrorMessages.email_msg = 'field required';
      this.ErrorMessages.isEmailEmpty = true;
      ok = false;
    } else {
      this.ErrorMessages.isEmailEmpty = false;
    }

    if (!this.validation.isEmailValid(this.TempUser.Email) && !this.ErrorMessages.isEmailEmpty) {
      this.ErrorMessages.email_msg = 'invalid email';
      this.ErrorMessages.isEmailValid = false;
      ok = false;
    } else {
      this.ErrorMessages.isEmailValid = true;
    }

    return ok;
  }

  saveUserEdit(user: User) {
    if (this.TempUser.Username !== user.userName || this.TempUser.Email !== user.userEmail) {
      if (this.validateEditData()) {
      user.userName =  this.TempUser.Username;
      user.setName(this.TempUser.Username);
      user.userEmail = this.TempUser.Email;

      // save data to the server
      this.isDataSaved = true;
      setTimeout(() => {
        this.isDataSaved = false;
      }, 2000);

     }
    }
  }
}
