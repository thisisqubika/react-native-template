import React from 'react';
import Profile from 'components/Profile';
import UserController from 'controllers/UserController';
import strings from 'localization';
import { fireEvent, render } from 'test-utils';

jest.mock('controllers/UserController', () => ({
  logout: jest.fn(() => {
    return Promise.resolve();
  }),
}));

describe('Profile', () => {
  test('should render the title and logout button', () => {
    const { getByText } = render(<Profile />);
    const profileTitle = getByText(strings.profile);
    const logoutButton = getByText(strings.logout);

    expect(profileTitle).toBeTruthy();
    expect(logoutButton).toBeTruthy();
  });

  test('should logout the user', async () => {
    const { getByText } = render(<Profile />);
    const logoutButton = getByText(strings.logout);

    fireEvent.press(logoutButton);

    expect(UserController.logout).toHaveBeenCalledTimes(1);
  });
});
