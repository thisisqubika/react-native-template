import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { createStore } from 'redux';
import registerScreens from './components/Navigation';

// Replace this with your own store.
const rootStore = createStore((state, action) => state);

class App {
  constructor(store, provider) {
    this.store = store;
    this.provider = provider;
  }

  startApp = () => {
    registerScreens(this.store, this.provider);
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'Welcome',
        title: 'Welcome',
      },
    });
  }
}

export default new App(rootStore, Provider);
