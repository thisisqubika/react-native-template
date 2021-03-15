import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NAVIGATION } from '@/constants';
import { Home } from '@/screens';

const Stack = createNativeStackNavigator();

export function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.home} component={Home} />
    </Stack.Navigator>
  );
}
