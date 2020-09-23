import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-native';
import homeIcon from 'assets/ic_home/ic_home.png';
import settingsIcon from 'assets/ic_settings/ic_settings.png';
import navigationConstants from 'constants/navigation';

const tabIcon = {
  [navigationConstants.home]: homeIcon,
  [navigationConstants.profile]: settingsIcon,
};

function TabBarIcon({ name, color }) {
  return <Image source={tabIcon[name]} style={{ tintColor: color }} />;
}

TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default TabBarIcon;
