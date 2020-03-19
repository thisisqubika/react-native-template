import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationConstants from 'components/navigation/NavigationConstants';
import Login from 'components/Login';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  const { login } = NavigationConstants;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={login}
        component={Login}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
