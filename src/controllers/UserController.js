import { routes } from '@/controllers/routes';
import { strings } from '@/localization';

export class UserController {
  constructor(networkService) {
    this.networkService = networkService;
  }

  login({ username, password, demoMode }) {
    if (demoMode) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username && password) {
            resolve({ data: { user: { username } } });
          } else {
            reject({ data: { error: strings.login.invalidCredentials } });
          }
        }, 250);
      });
    }

    return this.networkService.request({
      method: 'POST',
      url: routes.authentication.login,
      data: { username, password },
    });
  }

  logout({ demoMode } = {}) {
    if (demoMode) {
      return new Promise((resolve) => {
        setTimeout(resolve, 250);
      });
    }

    return this.networkService.request({
      method: 'DELETE',
      url: routes.authentication.logout,
    });
  }
}
