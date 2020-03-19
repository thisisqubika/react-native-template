import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'components/Home';
import NavigationConstants from 'components/navigation/NavigationConstants';
import Profile from 'components/Profile';
import Colors from 'helpers/Colors';
import iconForTab from 'helpers/TabNavigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NavigationConstants.home}
        component={Home}
      />
    </Stack.Navigator>
  );
};

const ProfileNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NavigationConstants.profile}
        component={Profile}
      />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  const TabIcon = ({ icon, tintColor }) => (// eslint-disable-line
    <Image
      source={icon}
      style={{ tintColor }}
    />
  );

  return (
    <Tab.Navigator
      screenOptions={({ route: { name } }) => ({
        tabBarIcon: ({ color }) => ( //eslint-disable-line
          <TabIcon
            icon={iconForTab(name)}
            tintColor={color}
          />
        ),
      })}
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.dark,
      }}
    >
      <>
        <Tab.Screen name={NavigationConstants.home} component={HomeNavigator} />
        <Tab.Screen name={NavigationConstants.profile} component={ProfileNavigator} />
      </>
    </Tab.Navigator>
  );
};

export default AppNavigator;
