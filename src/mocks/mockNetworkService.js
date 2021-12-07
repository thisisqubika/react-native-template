import { strings } from '@/localization';

export const mockLoginNetworkService = {
  setAccessToken(_token) {},
  request({ data }) {
    if (data.password === 'invalidPassword') {
      const error = strings.login.invalidCredentials;
      throw { data: { error } };
    }

    const user = {
      id: 1,
      accessToken: '8973272932932eT32e',
      username: data.username,
    };

    return { data: { user } };
  },
};

export const mockLogoutNetworkService = {
  clearAccessToken() {},
  request() {},
};
