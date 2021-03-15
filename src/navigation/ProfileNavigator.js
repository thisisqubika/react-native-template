import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NAVIGATION } from '@/constants';
import { Profile } from '@/screens';

const Stack = createNativeStackNavigator();

export function ProfileNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION.profile}
        component={Profile}
        options={{ headerLargeTitle: true }}
      />
    </Stack.Navigator>
  );
}
