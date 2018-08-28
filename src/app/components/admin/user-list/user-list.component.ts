import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { User } from './user.model';
import { ValidationService } from '../../../services/validation/validation.service';
import { UserListService } from './../../../services/UserListService/user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  isDataSaved = false;

  userList: User[];

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

  constructor(
    private validation: ValidationService,
    private userlist: UserListService
  ) {
    // this.userList = [];
    this.userlist.getAllUsers().subscribe(
      succes => {
        this.userList = succes;
        this.userList.forEach(function (user) {
          user.userName = user.firstName + ' ' + user.lastName;
          user.showMenu = false;
          user.showEdit = false;
          user.userIsChecked = false;
          user.userIsEditing = true;
          user.userRole = (user.admin) ? 'admin' : 'user';
          user.userChangeRole = (user.admin) ? 'Make it user' : 'Make it an administrator';
          const datePipe = new DatePipe('en-US');
          user.createdAt =  datePipe.transform(user.createdAt, 'dd MMM yyyy');
          // debugger;
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {}

  onContextMenuClick(user: User) {
    user.showMenu = !user.showMenu;
  }

  onMouseLeave(user: User) {
    user.showMenu = false;
  }

  changeUserRole(user: User) {
    user.admin = !user.admin;
    user.userRole = user.admin ? 'admin' : 'user';
    user.userChangeRole = user.admin
      ? 'Make it user'
      : 'Make it an administrator';
    this.userlist.changeUserRole(user).subscribe();
  }

  deleteUser(user: User) {
    this.userList.splice(this.userList.indexOf(user), 1);
    this.userlist.deleteUser(user).subscribe();
  }

  saveUserEdit(user: User) {
    if (
      this.TempUser.Username !== user.userName ||
      this.TempUser.Email !== user.email
    ) {
      if (this.validateEditData()) {
        user.userName = this.TempUser.Username;
        console.log(user.userName);
        // debugger;
        const names = user.userName.split(' ', 3);
        user.firstName = names[0];
        user.lastName = names[1].concat((names[2] === undefined) ? '' : ' ' + names[2]);
        user.email = this.TempUser.Email;

        // save data to the server
        this.userlist.editUser(user).subscribe(
          succes => {
            this.isDataSaved = true;
            setTimeout(() => {
              this.isDataSaved = false;
            }, 2000);
          },
          error => {
            console.log(error);
          }
        );
      }
    } else {
      this.refreshValidation(); // user can write something wrong but then but it`s initial data back
      // this way if data is not new we do not update anything, so we refresh validation to all ok
    }
  }

  showEdit(user: User) {
    for (const usr of this.userList) {
      usr.userIsEditing = false;
    }
    user.userIsChecked = true;
    user.showEdit = true;
    this.TempUser.Username = user.userName;
    this.TempUser.Email = user.email;
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

    if (
      this.validation.checkEmpty(this.TempUser.Username) ||
      this.validation.isOnlySpaces(this.TempUser.Username)
    ) {
      this.ErrorMessages.name_msg = 'field required';
      this.ErrorMessages.isNameEmpty = true;
      ok = false;
    } else {
      this.ErrorMessages.isNameEmpty = false;
    }

    if (
      this.validation.isEntireName(this.TempUser.Username) &&
      !this.ErrorMessages.isNameEmpty
    ) {
      this.ErrorMessages.isEntireName = false;
      this.ErrorMessages.name_msg = 'both names required';
      ok = false;
    } else {
      this.ErrorMessages.isEntireName = true;
    }

    if (
      !this.validation.isLetter(this.TempUser.Username) &&
      !this.ErrorMessages.isNameEmpty
    ) {
      this.ErrorMessages.name_msg = 'only characters allowed';
      this.ErrorMessages.isNameValid = false;
      ok = false;
    } else {
      this.ErrorMessages.isNameValid = true;
    }

    if (
      this.validation.checkEmpty(this.TempUser.Email) ||
      this.validation.isOnlySpaces(this.TempUser.Email)
    ) {
      this.ErrorMessages.email_msg = 'field required';
      this.ErrorMessages.isEmailEmpty = true;
      ok = false;
    } else {
      this.ErrorMessages.isEmailEmpty = false;
    }

    if (
      !this.validation.isEmailValid(this.TempUser.Email) &&
      !this.ErrorMessages.isEmailEmpty
    ) {
      this.ErrorMessages.email_msg = 'invalid email';
      this.ErrorMessages.isEmailValid = false;
      ok = false;
    } else {
      this.ErrorMessages.isEmailValid = true;
    }

    return ok;
  }

  refreshValidation() {
    this.ErrorMessages.isNameValid = true;
    this.ErrorMessages.isNameEmpty = false;
    this.ErrorMessages.isEmailValid = true;
    this.ErrorMessages.isEmailEmpty = false;
    this.ErrorMessages.isEntireName = true;
  }
}
