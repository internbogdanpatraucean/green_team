export class NewUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;

  constructor() {
    this.first_name = '';
    this.last_name = '';
    this.email = '';
    this.password = '';
  }
}
