import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { TabBarIcon } from '@/components';
import { HomeNavigator } from '@/navigation/HomeNavigator';
import { ProfileNavigator } from '@/navigation/ProfileNavigator';
import { TABS } from '@/constants/navigation';

const Tab = createBottomTabNavigator();

export function AppNavigator() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.activeTab,
        tabBarInactiveTintColor: colors.inactiveTab,
        tabBarIcon: ({ color }) => <TabBarIcon color={color} routeName={route.name} />,
      })}
    >
      <Tab.Screen name={TABS.home} component={HomeNavigator} />
      <Tab.Screen name={TABS.profile} component={ProfileNavigator} />
    </Tab.Navigator>
  );
}
