import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import { UserController } from '_controllers';
import strings from '_localization';
import Profile from '_screens/Profile';
import { withProviders } from '_test-utils';

jest.mock('_controllers/UserController');

describe('Profile', () => {
  test('should render the title and logout button', async () => {
    const { getByText } = render(withProviders(<Profile />));

    const profileTitle = getByText(strings.profile.message);
    const logoutButton = getByText(strings.profile.logout);

    await waitFor(() => {
      expect(profileTitle).toBeTruthy();
      expect(logoutButton).toBeTruthy();
    });
  });

  test('should logout the user', async () => {
    const logoutSpy = jest.spyOn(UserController, 'logout');
    const { getByText } = render(withProviders(<Profile />));

    const logoutButton = getByText(strings.profile.logout);

    fireEvent.press(logoutButton);

    await waitFor(() => {
      expect(logoutSpy).toHaveBeenCalledTimes(1);
    });
  });
});
