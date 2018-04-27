import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { createStore } from 'redux';
import { Screens, registerScreens } from './components/Navigation';
import homeIcon from './assets/ic_home/ic_home.png';
import profileIcon from './assets/ic_settings/ic_settings.png';
import strings from './localization';
import Colors from './helpers/Colors';

// Replace this with your own store.
const rootStore = createStore((state, action) => state);

class App {
  constructor(store, provider) {
    this.store = store;
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
    // Your logic to define which flow will you start with
    this.startLoggedOutApp();
  }
}

export default new App(rootStore, Provider);
