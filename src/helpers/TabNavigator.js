import homeIcon from 'assets/ic_home/ic_home.png';
import settingsIcon from 'assets/ic_settings/ic_settings.png';
import NavigationConstants from 'components/navigation/NavigationConstants';

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

export default iconForTab;
