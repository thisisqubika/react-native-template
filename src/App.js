import React from 'react';
import { hide } from 'react-native-bootsplash';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { RootNavigator } from '_navigation';
import { persistor, store } from '_store';

enableScreens();

export function App() {
  const hideSplashScreen = async () => {
    await hide({ fade: true });
  };

  return (
    <Provider store={store}>
      <PersistGate onBeforeLift={hideSplashScreen} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
}
