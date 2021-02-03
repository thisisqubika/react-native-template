import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { TabBarIcon } from '_components';
import { NAVIGATION } from '_constants';
import HomeNavigator from '_navigation/HomeNavigator';
import ProfileNavigator from '_navigation/ProfileNavigator';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => (
          <TabBarIcon color={color} routeName={route.name} />
        ),
      })}
      tabBarOptions={{
        activeTintColor: colors.activeTab,
        inactiveTintColor: colors.inactiveTab,
      }}
    >
      <Tab.Screen name={NAVIGATION.home} component={HomeNavigator} />
      <Tab.Screen name={NAVIGATION.profile} component={ProfileNavigator} />
    </Tab.Navigator>
  );
}

export default AppNavigator;
