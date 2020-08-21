import React from 'react';
import Home from 'components/Home';
import { renderWithProviders } from 'test-utils/render';

const fakeStore = {
  user: {
    id: 1,
    name: 'John',
    email: 'john.doe@example.com',
  },
  error: {},
  status: {},
};

describe('Home', () => {
  test('should render a welcome message with the user name', () => {
    const { getByText } = renderWithProviders(<Home />, {
      initialState: fakeStore,
    });

    expect(getByText('Home')).toBeTruthy();
    expect(getByText('Welcome John')).toBeTruthy();
  });
});
