import React from 'react';
import Login from 'components/Login';
import UserController from 'controllers/UserController';
import strings from 'localization';
import { fireEvent, render, wait } from 'test-utils';

jest.mock('controllers/UserController', () => ({
  login: jest.fn((email, password) => {
    if (email && password) {
      return Promise.resolve({ name: 'User', email: 'user@example.com' });
    }
    return Promise.reject(new Error('Invalid Email/Password'));
  }),
}));

describe('Login', () => {
  const fakeUser = {
    email: 'user@example.com',
    password: 'password',
  };

  it('should submit correctly', async () => {
    const { getByHintText, getByText } = render(<Login />);
    const submitButton = getByText(strings.login);
    const emailInput = getByHintText(strings.emailHint);
    const passwordInput = getByHintText(strings.passwordHint);

    fireEvent.changeText(emailInput, fakeUser.email);
    fireEvent.changeText(passwordInput, fakeUser.password);
    fireEvent.press(submitButton);

    await wait(() =>
      expect(UserController.login).toHaveBeenCalledWith(
        fakeUser.email,
        fakeUser.password
      )
    );
  });

  it('should show error on response failure', async () => {
    const { getByHintText, getByText } = render(<Login />);
    const submitButton = getByText(strings.login);
    const emailInput = getByHintText(strings.emailHint);

    fireEvent.changeText(emailInput, fakeUser.email);
    fireEvent.press(submitButton);

    await wait(() => expect(getByText('Invalid Email/Password')).toBeTruthy());
  });
});
