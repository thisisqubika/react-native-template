class UserController {
  static async login(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          resolve({ name: 'Jorge' });
        } else {
          reject(new Error('Invalid Email/Password'));
        }
      }, 1000);
    });
  }

  static async logout() {
    return new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
  }
}

export default UserController;
