import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NAVIGATION } from '_constants';
import { Profile } from '_screens';

const Stack = createNativeStackNavigator();

function ProfileNavigator() {
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

export default ProfileNavigator;
