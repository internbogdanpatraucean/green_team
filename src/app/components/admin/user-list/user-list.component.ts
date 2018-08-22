import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  userList: User[] = [
    new User('Marcel Pavel', 'email1@gmail.com', '../../../../assets/profile_pic.png', '22 AUG 2018', '12,500', false),
    new User('Marcel Pavelescu', 'email2@gmail.com', '../../../../assets/profile_pic.png', '22 AUG 2018', '8,000', false),
    new User('Mircea Pavel', 'email3@gmail.com', '../../../../assets/profile_pic.png', '22 AUG 2018', '25,500', true),
    new User('Marcel Paul', 'email4@gmail.com', '../../../../assets/profile_pic.png', '22 SEP 2018', '3,500', false),
    new User('Marele Pavel', 'email5@gmail.com', '../../../../assets/profile_pic.png', '22 AUG 2018', '12,500', false),
    new User('Marcel Pavaj', 'email6@gmail.com', '../../../../assets/profile_pic.png', '22 AUG 2018', '12,500', false)
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
    // request to server
  }

  deleteUser(user: User) {
    this.userList.splice(this.userList.indexOf(user), 1);
    // request to server
  }

  showEditModal() {
    document.getElementById('showModal').click();
  }
}
