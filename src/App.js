import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { Screens, registerScreens } from './components/Navigation';
import homeIcon from './assets/ic_home/ic_home.png';
import profileIcon from './assets/ic_settings/ic_settings.png';
import strings from './localization';
import Colors from './helpers/Colors';
import { store, persist } from './reducers';

class App {
  constructor(rootStore, provider) {
    this.store = rootStore;
    this.provider = provider;
  }

  startLoggedInApp = () => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: Screens.Home,
          icon: homeIcon,
          label: strings.home,
        },
        {
          screen: Screens.Profile,
          icon: profileIcon,
          label: strings.profile,
        },
      ],
      tabsStyle: {
        tabBarSelectedButtonColor: Colors.primary,
        tabBarButtonColor: Colors.gray,
        initialTabIndex: 0,
      },
      animationType: 'fade',
    });
  }

  startLoggedOutApp = () => {
    Navigation.startSingleScreenApp({
      screen: {
        screen: Screens.Login,
      },
      animationType: 'fade',
    });
  }

  startApp = () => {
    registerScreens(this.store, this.provider);
    persist(() => {
      this.startLoggedOutApp();
    });
  }
}

export default new App(store, Provider);
