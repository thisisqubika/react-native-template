import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@/test-utils/configureStore';

export function withProviders(component, { initialState, networkService, demoMode } = {}) {
  const store = configureStore({ initialState, networkService, demoMode });
  return <Provider store={store}>{component}</Provider>;
}
