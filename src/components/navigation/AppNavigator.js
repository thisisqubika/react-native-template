import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';
import Home from 'components/Home';
import NavigationConstants from 'components/navigation/NavigationConstants';
import Profile from 'components/Profile';
import iconForTab from 'helpers/TabNavigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const { home, profile } = NavigationConstants;

function TabIcon({ name, color }) {
  return <Image source={iconForTab(name)} style={{ tintColor: color }} />;
}

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
        tabBarIcon: ({ color }) => <TabIcon color={color} name={name} />,
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

TabIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default AppNavigator;
