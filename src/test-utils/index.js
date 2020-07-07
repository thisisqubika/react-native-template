import { render } from '@testing-library/react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';

function renderWithProviders(ui, { initialState, ...options } = {}) {
  const Providers = ({ children }) => (
    <Provider store={configureStore(initialState)}>{children}</Provider>
  );

  Providers.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return render(ui, { wrapper: Providers, ...options });
}

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { renderWithProviders as render };
