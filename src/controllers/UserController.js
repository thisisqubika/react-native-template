class UserController {
  static async login(email, password) {
    return new Promise((resolve, reject) => {
      if (email && password) {
        setTimeout(() => resolve({ name: 'Jorge' }), 1000);
      } else {
        setTimeout(() => reject(new Error('Invalid Email/Password')), 1000);
      }
    });
  }

  static async logout() {
    return new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
  }
}

export default UserController;
