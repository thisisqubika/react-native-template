import { NavigationContainer } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import AuthNavigator from 'navigation/AuthNavigator';
import AppNavigator from 'navigation/AppNavigator';
import { getUser } from 'selectors/UserSelectors';

function Navigation({ theme }) {
  const user = useSelector(getUser);

  return (
    <NavigationContainer theme={theme}>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

Navigation.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Navigation;
