import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from 'components/Login';
import navigationConstants from 'constants/navigation';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Login}
        name={navigationConstants.login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
