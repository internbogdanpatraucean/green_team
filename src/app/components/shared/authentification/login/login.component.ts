import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public person = {
    email: '',
    password: ''
  };
  constructor() { }

  ngOnInit() {
  }

  colectData() {
    console.log(this.person);
  }



}
