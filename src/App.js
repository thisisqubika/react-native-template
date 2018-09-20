import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { Screens, registerScreens } from './components/Navigation';
import homeIcon from './assets/ic_home/ic_home.png';
import profileIcon from './assets/ic_settings/ic_settings.png';
import strings from './localization';
import Colors from './helpers/Colors';
import { store, persist } from './reducers';

const navigatorStyles = {
  topBar: {
    background: {
      color: Colors.primary,
    },
  },
};

const tabStyles = {
  bottomTabs: {
    visible: true,
    currentTabIndex: 0,
    currentTabId: Screens.Home,
    drawBehind: false,
    backgroundColor: Colors.white,
  },
};

class App {
  constructor(rootStore, provider) {
    this.store = rootStore;
    this.provider = provider;
  }

  buildTab = (name, icon, text) => ({
    stack: {
      children: [{
        component: {
          name,
        },
      }],
      options: {
        bottomTab: {
          text,
          icon,
          iconColor: Colors.gray,
          selectedIconColor: Colors.primary,
          textColor: Colors.gray,
          selectedTextColor: Colors.primary,
        },
      },
    },
  })

  startLoggedInApp = () => {
    const homeTab = this.buildTab(Screens.Home, homeIcon, strings.home);
    const profileTab = this.buildTab(Screens.Profile, profileIcon, strings.profile);
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            homeTab,
            profileTab,
          ],
          options: { ...navigatorStyles },
        },
        options: {
          ...tabStyles,
        },
      },
    });
  }

  startLoggedOutApp = () => {
    Navigation.setRoot({
      root: {
        stack: {
          options: navigatorStyles,
          children: [{
            component: {
              name: Screens.Login,
            },
          }],
        },
      },
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
