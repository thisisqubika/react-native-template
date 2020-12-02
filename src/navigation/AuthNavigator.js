import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { NAVIGATION } from '_constants';
import { Login } from '_screens';
import { getUser } from '_selectors/UserSelectors';

const Stack = createStackNavigator();

function AuthNavigator() {
  const user = useSelector(getUser);

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Login}
        name={NAVIGATION.login}
        options={{
          headerShown: false,
          animationTypeForReplace: user ? 'push' : 'pop',
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
