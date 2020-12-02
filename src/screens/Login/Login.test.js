import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import { UserController } from '_controllers';
import strings from '_localization';
import Login from '_screens/Login';
import { withProviders } from '_test-utils';

jest.mock('_controllers/UserController');

describe('Login', () => {
  const fakeData = {
    username: 'username',
    password: 'password',
  };

  it('should submit correctly', async () => {
    const loginSpy = jest.spyOn(UserController, 'login');
    const { getByHintText, getByText } = render(withProviders(<Login />));

    const submitButton = getByText(strings.login.button);
    const usernameInput = getByHintText(strings.login.usernameHint);
    const passwordInput = getByHintText(strings.login.passwordHint);

    fireEvent.changeText(usernameInput, fakeData.username);
    fireEvent.changeText(passwordInput, fakeData.password);
    fireEvent.press(submitButton);

    await waitFor(() => {
      expect(loginSpy).toHaveBeenCalledWith(
        fakeData.username,
        fakeData.password
      );
    });
  });

  it('should show error on response failure', async () => {
    const loginSpy = jest.spyOn(UserController, 'login');
    const { getByHintText, getByText } = render(withProviders(<Login />));

    const submitButton = getByText(strings.login.button);
    const usernameInput = getByHintText(strings.login.usernameHint);

    fireEvent.changeText(usernameInput, fakeData.username);
    fireEvent.press(submitButton);

    await waitFor(() => {
      expect(loginSpy).toHaveBeenCalledWith(fakeData.username, '');
      expect(getByText(strings.login.invalidCredentials)).toBeTruthy();
    });
  });
});
