import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';
import { AppNavigator } from '@/navigation/AppNavigator';
import { AuthNavigator } from '@/navigation/AuthNavigator';
import { getUser } from '@/features/user/userSlice';
import { theme } from '@/theme';

export function RootNavigator() {
  const user = useSelector(getUser);
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={theme[scheme]}>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
