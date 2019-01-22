import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthHandler from './AuthHandler';
import Auth from './AuthNavigator';
import App from './AppNavigator';

export default createAppContainer( // eslint-disable-line
  createSwitchNavigator(
    {
      App,
      Auth,
      AuthHandler,
    },
    {
      initialRouteName: 'AuthHandler',
    },
  ),
); // eslint-disable-line
