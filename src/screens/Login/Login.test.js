import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import { UserController } from '@/controllers';
import { strings } from '@/localization';
import { Login } from '@/screens/Login/Login';
import { withProviders } from '@/test-utils';

jest.mock('@/controllers/UserController');

describe('Login', () => {
  const fakeData = {
    username: 'username',
    password: 'password',
  };

  it('should match the snapshot', () => {
    const { toJSON } = render(withProviders(<Login />));

    expect(toJSON()).toMatchSnapshot();
  });

  it('should submit correctly with valid username and password', async () => {
    const loginSpy = jest.spyOn(UserController, 'login');

    const { getByHintText, getByText } = render(withProviders(<Login />));

    const submitButton = getByText(strings.login.button);
    const usernameInput = getByHintText(strings.login.usernameHint);
    const passwordInput = getByHintText(strings.login.passwordHint);

    fireEvent.changeText(usernameInput, fakeData.username);
    fireEvent.changeText(passwordInput, fakeData.password);

    await waitFor(() => {
      fireEvent.press(submitButton);
    });

    expect(loginSpy).toHaveBeenCalledWith(fakeData.username, fakeData.password);
  });

  it('should show error when password is not provided', async () => {
    const loginSpy = jest.spyOn(UserController, 'login');

    const { getByHintText, getByText } = render(withProviders(<Login />));

    const submitButton = getByText(strings.login.button);
    const usernameInput = getByHintText(strings.login.usernameHint);

    fireEvent.changeText(usernameInput, fakeData.username);

    await waitFor(() => {
      fireEvent.press(submitButton);
    });

    expect(loginSpy).toHaveBeenCalledWith(fakeData.username, '');
    expect(getByText(strings.login.invalidCredentials)).toBeTruthy();
  });
});
