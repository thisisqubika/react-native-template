import { strings } from '@/localization';

export class UserController {
  static login(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username && password) {
          resolve({ username });
        } else {
          reject(new Error(strings.login.invalidCredentials));
        }
      }, 250);
    });
  }

  static logout() {
    return new Promise((resolve) => {
      setTimeout(resolve, 250);
    });
  }
}
