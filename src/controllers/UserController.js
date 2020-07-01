class UserController {
  constructor() {
    this.basePath = '/users';
  }

  login = async (email, password) =>
    // This is a mocked example to simulate api behavior
    new Promise((resolve, reject) => {
      if (email !== 'a@a.com' && password !== '') {
        setTimeout(() => resolve({ name: 'Jorge' }), 1000);
      } else {
        setTimeout(() => reject(new Error('Invalid Email/Password')), 1000);
      }
    });

  logout = () => null;
}

export default new UserController();
