import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-native';
import { homeIcon, settingsIcon } from '@/assets';
import { NAVIGATION } from '@/constants';

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
