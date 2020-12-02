import { useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NAVIGATION } from '_constants';
import { Profile } from '_screens';

const Stack = createStackNavigator();

function ProfileNavigator() {
  const { colors } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION.profile}
        component={Profile}
        options={{
          headerStyle: {
            backgroundColor: colors.activeTab,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
