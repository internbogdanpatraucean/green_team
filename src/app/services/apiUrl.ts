export const api = {
  base: 'http://192.168.151.17:8000/api/',
  get login() {
    return this.base + 'login';
  },
  get register() {
    return this.base + 'register';
  },
  get category() {
    return this.base + 'categories';
  },
  get course(){
    return this.base+'courses';
  }
};
