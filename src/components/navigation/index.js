import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import AuthNavigator from 'components/navigation/AuthNavigator';
import AppNavigator from 'components/navigation/AppNavigator';
import getUser from 'selectors/UserSelectors';

const Navigation = () => {
  const user = useSelector(state => getUser(state), shallowEqual);
  return user ? <AppNavigator /> : <AuthNavigator />;
};

export default Navigation;
