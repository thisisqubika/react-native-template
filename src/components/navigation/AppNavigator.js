import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import homeIcon from 'assets/ic_home/ic_home.png';
import settingsIcon from 'assets/ic_settings/ic_settings.png';
import Home from 'components/Home';
import NavigationConstants from 'components/navigation/NavigationConstants';
import Profile from 'components/Profile';
import Colors from 'helpers/Colors';

const HomeNavigator = () => {
  const Stack = createStackNavigator();
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
  const iconForTab = routeName => {
    switch (routeName) {
      case NavigationConstants.home:
        return homeIcon;
      case NavigationConstants.profile:
        return settingsIcon;
      default:
        return null;
    }
  };

  const TabIcon = ({ icon, tintColor }) => (// eslint-disable-line
    <Image
      source={icon}
      style={{ tintColor }}
    />
  );

  const Tab = createBottomTabNavigator();

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
