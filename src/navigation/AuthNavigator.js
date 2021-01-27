import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { useSelector } from 'react-redux';
import { NAVIGATION } from '_constants';
import { Login } from '_screens';
import { getUser } from '_selectors/UserSelectors';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  const user = useSelector(getUser);

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Login}
        name={NAVIGATION.login}
        options={{
          headerShown: false,
          replaceAnimation: user ? 'push' : 'pop',
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
