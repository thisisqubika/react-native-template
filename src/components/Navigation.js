import { Navigation } from 'react-native-navigation';
import Login from './Login';
import Home from './Home';
import Profile from './Profile';

export const Screens = {
  Login: 'Login',
  Home: 'Home',
  Profile: 'Profile',
};

export const registerScreens = (store, provider) => {
  // Register all screens of the app
  Navigation.registerComponentWithRedux(Screens.Login, () => Login, provider, store);
  Navigation.registerComponentWithRedux(Screens.Home, () => Home, provider, store);
  Navigation.registerComponentWithRedux(Screens.Profile, () => Profile, provider, store);
};
