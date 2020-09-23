import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import TabBarIcon from 'components/common/TabBarIcon';
import Home from 'components/Home';
import Profile from 'components/Profile';
import navigationConstants from 'constants/navigation';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const { home, profile } = navigationConstants;

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={home} component={Home} />
    </Stack.Navigator>
  );
}

function ProfileNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={profile} component={Profile} />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route: { name } }) => ({
        tabBarIcon: ({ color }) => <TabBarIcon color={color} name={name} />,
      })}
      tabBarOptions={{
        activeTintColor: colors.activeTab,
        inactiveTintColor: colors.inactiveTab,
      }}
    >
      <Tab.Screen name={home} component={HomeNavigator} />
      <Tab.Screen name={profile} component={ProfileNavigator} />
    </Tab.Navigator>
  );
}

export default AppNavigator;
