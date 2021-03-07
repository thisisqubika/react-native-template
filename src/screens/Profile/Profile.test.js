import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { UserController } from '_controllers';
import { strings } from '_localization';
import { Profile } from '_screens/Profile/Profile';
import { withProviders } from '_test-utils';

jest.mock('_controllers/UserController');

describe('Profile', () => {
  it('should match the snapshot', () => {
    const { toJSON } = render(withProviders(<Profile />));

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render the title and logout button', async () => {
    const { getByText } = render(withProviders(<Profile />));

    const profileTitle = getByText(strings.profile.message);
    const logoutButton = getByText(strings.profile.logout);

    expect(profileTitle).toBeTruthy();
    expect(logoutButton).toBeTruthy();
  });

  it('should logout the user', async () => {
    const logoutSpy = jest.spyOn(UserController, 'logout');

    const { getByText } = render(withProviders(<Profile />));

    const logoutButton = getByText(strings.profile.logout);

    fireEvent.press(logoutButton);

    expect(logoutSpy).toHaveBeenCalledTimes(1);
  });
});
