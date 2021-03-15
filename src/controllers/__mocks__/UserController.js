import { strings } from '@/localization';

export const UserController = {
  login: (username, password) => {
    if (username && password) {
      return Promise.resolve({ username });
    }
    return Promise.reject(new Error(strings.login.invalidCredentials));
  },
  logout: () => {
    return Promise.resolve();
  },
};
