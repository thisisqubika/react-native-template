import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NAVIGATION } from '_constants';
import { Home } from '_screens';

const Stack = createNativeStackNavigator();

export function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.home} component={Home} />
    </Stack.Navigator>
  );
}
