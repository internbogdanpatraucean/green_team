import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  isOnCoursePage = false;
  isOnUsersPage = false;
  isOnAccountPage = false;

  user: User;

  constructor(private router: Router) {
    if (this.router.url === '/courses') {
      this.isOnCoursePage = true;
      this.isOnUsersPage = false;
      this.isOnAccountPage = false;
    }

    if (this.router.url === '/users') {
      this.isOnCoursePage = false;
      this.isOnUsersPage = true;
      this.isOnAccountPage = false;
    }

    if (this.router.url === '/account') {
      this.isOnCoursePage = false;
      this.isOnUsersPage = false;
      this.isOnAccountPage = true;
    }
    this.user = new User();
    this.getUserData();
   }

  ngOnInit() {
  }

  getUserData() {
    // request to the server
    this.user.username = 'Mircea Pavel';
    this.user.profilePic = '../../../../assets/profile_pic.png';
    this.user.score = 160;
    this.user.isAdmin = true;
  }
}
