export class User {
  userName: string;
  userEmail: string;
  userPicture: string;
  userRole: string;
  userDate: string;
  userScore: string;
  showMenu: boolean;
  userIsAdmin: boolean;
  userChangeRole: string;

  constructor(name: string, email: string, pic: string, date: string, score: string, admin: boolean ) {
    this.userName = name;
    this.userEmail = email;
    this.userPicture = pic;
    this.userDate = date;
    this.userScore = score;
    this.showMenu = false;
    this.userIsAdmin = admin;
    this.userRole = (this.userIsAdmin) ? 'admin' : 'user';
    this.userChangeRole = (this.userIsAdmin) ? 'Make it user' : 'Make it an administrator';
  }

  setMenu(on: boolean) {
    this.showMenu = on;
  }
}
