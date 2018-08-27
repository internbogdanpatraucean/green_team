export class User {
  username: string;
  profilePic: string;
  score: number;
  isAdmin: boolean;

  constructor() {
    this.username = '';
    this.profilePic = '';
    this.isAdmin = false;
    this.score = 0;
  }
}
