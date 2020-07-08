import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationConstants from 'components/navigation/NavigationConstants';
import Login from 'components/Login';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Login}
        name={NavigationConstants.login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
