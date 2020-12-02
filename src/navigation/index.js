import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';
import AppNavigator from '_navigation/AppNavigator';
import AuthNavigator from '_navigation/AuthNavigator';
import { getUser } from '_selectors/UserSelectors';
import { theme } from '_theme';

function RootNavigator() {
  const user = useSelector(getUser);
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={theme[scheme]}>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default RootNavigator;
