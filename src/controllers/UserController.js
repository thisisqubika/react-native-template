import httpClient from './HttpClient';

class UserController {
  constructor() {
    this.basePath = '/users';
  }

  login = async (email, password) => {
    // Real implementation of a login request using the HttpClient
    /* try {
      const result = await httpClient.post({
        url: `${this.basePath}/session`,
        method: 'POST',
        data: {
          email,
          password,
        },
      });
      return result.data.user;
      // Data is the object exposes by axios for the response json
    } catch (error) {
      return error;
    }
    */
    // This is a mocked example to simulate api behavior
    return new Promise((resolve, reject) => {
      if (email !== 'a@a.com' && password !== '') {
        setTimeout(
          () => resolve({ name: 'Jorge' }),
          1000,
        );
      } else {
        setTimeout(
          () => reject(new Error('Invalid Email/Password')),
          1000,
        );
      }
    });
  }

  logout = () => null;
}

export default new UserController();
