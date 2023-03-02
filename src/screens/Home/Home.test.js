import { render } from '@testing-library/react-native';
import React from 'react';
import { strings } from '@/localization';
import { Home } from '@/screens/Home/Home';
import { withProviders } from '@/test-utils';
import { STATUS } from '@/constants';

const fakeStore = {
  user: {
    user: {
      username: 'johndoe',
    },
    status: STATUS.SUCCESS,
    error: null,
  },
};

describe('Home', () => {
  it('should match the snapshot', () => {
    const { toJSON } = render(withProviders(<Home />, { initialState: fakeStore }));

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render a welcome message with the user name', () => {
    const { getByText } = render(withProviders(<Home />, { initialState: fakeStore }));

    expect(getByText(`${strings.home.message} johndoe`)).toBeTruthy();
  });
});
