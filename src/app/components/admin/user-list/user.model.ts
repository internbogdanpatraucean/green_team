export class User {
  userID: number;
  userFirstName: string;
  userLastName: string;
  userName: string;
  userEmail: string;
  userPicture: string;
  userRole: string;
  userDate: string;
  userScore: string;
  showMenu: boolean;
  showEdit: boolean;
  userIsAdmin: boolean;
  userIsChecked: boolean;
  userIsEditing: boolean;
  userChangeRole: string;

  constructor(id: number, first: string, last: string, email: string, pic: string, date: string, score: string, admin: boolean ) {
    this.userID = id;
    this.userFirstName = first;
    this.userLastName = last;
    this.userName = this.userFirstName + ' ' + this.userLastName;
    this.userEmail = email;
    this.userPicture = pic;
    this.userDate = date;
    this.userScore = score;
    this.showMenu = false;
    this.showEdit = false;
    this.userIsAdmin = admin;
    this.userIsChecked = false;
    this.userIsEditing = true;
    this.userRole = (this.userIsAdmin) ? 'admin' : 'user';
    this.userChangeRole = (this.userIsAdmin) ? 'Make it user' : 'Make it an administrator';
  }

  public setName(name: string) {
    const names = name.split(' ', 3);
    this.userFirstName = names[0];
    this.userLastName = names[1].concat((names[2] === undefined) ? '' : ' ' + names[2]);
  }
}
