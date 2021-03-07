import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-native';
import homeIcon from '_assets/ic_home/ic_home.png';
import settingsIcon from '_assets/ic_settings/ic_settings.png';
import { NAVIGATION } from '_constants';

const tabIcon = {
  [NAVIGATION.home]: homeIcon,
  [NAVIGATION.profile]: settingsIcon,
};

export function TabBarIcon({ color, routeName }) {
  return (
    <Image
      accessibilityIgnoresInvertColors
      source={tabIcon[routeName]}
      style={{ tintColor: color }}
    />
  );
}

TabBarIcon.propTypes = {
  color: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
};
