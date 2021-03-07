import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NAVIGATION } from '_constants';
import { Login } from '_screens';

const Stack = createNativeStackNavigator();

export function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Login}
        name={NAVIGATION.login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
