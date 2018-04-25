import { Navigation } from 'react-native-navigation';
import Welcome from './Welcome';

export default (store, provider) => {
  // Register all screens of the app
  Navigation.registerComponent('Welcome', () => Welcome, store, provider);
};
