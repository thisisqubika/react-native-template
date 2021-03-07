import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@/test-utils/configureStore';

export function withProviders(component, { initialState } = {}) {
  const store = configureStore(initialState);
  return <Provider store={store}>{component}</Provider>;
}
