import { render } from '@testing-library/react-native';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'test-utils/store';

export function renderWithProviders(component, { initialState } = {}) {
  const store = configureStore(initialState);
  return render(<Provider store={store}>{component}</Provider>);
}
