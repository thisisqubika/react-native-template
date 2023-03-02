import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '@/test-utils/setupStore';

export function withProviders(component, { initialState, networkService, demoMode } = {}) {
  const store = setupStore({ initialState, networkService, demoMode });
  return <Provider store={store}>{component}</Provider>;
}
