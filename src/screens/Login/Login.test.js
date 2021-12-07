import { fireEvent, render, waitForElementToBeRemoved } from '@testing-library/react-native';
import React from 'react';
import * as UserActions from '@/actions/UserActions';
import { strings } from '@/localization';
import { mockLoginNetworkService } from '@/mocks';
import { Login } from '@/screens/Login/Login';
import { withProviders } from '@/test-utils';

describe('Login', () => {
  it('should match the snapshot', () => {
    const { toJSON } = render(
      withProviders(<Login />, { networkService: mockLoginNetworkService })
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should make the request with valid credentials', async () => {
    const loginSpy = jest.spyOn(UserActions, 'login');

    const { getByHintText, getByText } = render(
      withProviders(<Login />, { networkService: mockLoginNetworkService })
    );

    const submitButton = getByText(strings.login.button);
    const usernameInput = getByHintText(strings.login.usernameHint);
    const passwordInput = getByHintText(strings.login.passwordHint);

    fireEvent.changeText(usernameInput, 'username');
    fireEvent.changeText(passwordInput, 'password');
    fireEvent.press(submitButton);

    expect(loginSpy).toHaveBeenCalledWith('username', 'password');

    await waitForElementToBeRemoved(() => getByText(strings.common.loading));

    loginSpy.mockRestore();
  });

  it('should show an error with invalid credentials', () => {
    const { getByHintText, getByText } = render(
      withProviders(<Login />, { networkService: mockLoginNetworkService })
    );

    const submitButton = getByText(strings.login.button);
    const usernameInput = getByHintText(strings.login.usernameHint);
    const passwordInput = getByHintText(strings.login.passwordHint);

    fireEvent.changeText(usernameInput, 'username');
    fireEvent.changeText(passwordInput, 'invalidPassword');
    fireEvent.press(submitButton);

    expect(getByText(strings.login.invalidCredentials)).toBeTruthy();
  });
});
