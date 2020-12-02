import { render } from '@testing-library/react-native';
import React from 'react';
import strings from '_localization';
import Home from '_screens/Home';
import { withProviders } from '_test-utils';

const fakeStore = {
  error: {},
  status: {},
  user: {
    username: 'johndoe',
  },
};

describe('Home', () => {
  test('should render a welcome message with the user name', () => {
    const { getByText } = render(
      withProviders(<Home />, { initialState: fakeStore })
    );

    expect(getByText(`${strings.home.message} johndoe`)).toBeTruthy();
  });
});
