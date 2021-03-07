import { render } from '@testing-library/react-native';
import React from 'react';
import { strings } from '_localization';
import { Home } from '_screens/Home/Home';
import { withProviders } from '_test-utils';

const fakeStore = {
  error: {},
  status: {},
  user: {
    username: 'johndoe',
  },
};

describe('Home', () => {
  it('should match the snapshot', () => {
    const { toJSON } = render(withProviders(<Home />));

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render a welcome message with the user name', () => {
    const { getByText } = render(
      withProviders(<Home />, { initialState: fakeStore })
    );

    expect(getByText(`${strings.home.message} johndoe`)).toBeTruthy();
  });
});
