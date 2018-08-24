import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  public User = {
    username : '',
    profilePicture: '',
    score: 0
  };

  constructor() {
    this.getUserData();
   }

  ngOnInit() {
  }

  getUserData() {
    // request to the server
    this.User.username = 'Mircea Pavel';
    this.User.profilePicture = '../../../../assets/profile_pic.png';
    this.User.score = 160;
  }

}
