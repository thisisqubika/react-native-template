import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import * as UserActions from '@/actions/UserActions';
import { strings } from '@/localization';
import { mockLogoutNetworkService } from '@/mocks';
import { Profile } from '@/screens/Profile/Profile';
import { withProviders } from '@/test-utils';

describe('Profile', () => {
  it('should match the snapshot', () => {
    const { toJSON } = render(
      withProviders(<Profile />, { networkService: mockLogoutNetworkService })
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render the title and logout button', () => {
    const { getByText } = render(
      withProviders(<Profile />, { networkService: mockLogoutNetworkService })
    );

    const profileTitle = getByText(strings.profile.message);
    const logoutButton = getByText(strings.profile.logout);

    expect(profileTitle).toBeTruthy();
    expect(logoutButton).toBeTruthy();
  });

  it('should logout the user', () => {
    const logoutSpy = jest.spyOn(UserActions, 'logout');

    const { getByText } = render(
      withProviders(<Profile />, { networkService: mockLogoutNetworkService })
    );

    const logoutButton = getByText(strings.profile.logout);

    fireEvent.press(logoutButton);

    expect(logoutSpy).toHaveBeenCalledTimes(1);

    logoutSpy.mockRestore();
  });
});
