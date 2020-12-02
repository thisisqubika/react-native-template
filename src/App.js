import React, { useEffect } from 'react';
import { hide } from 'react-native-bootsplash';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import RootNavigator from '_navigation';
import { persistor, store } from '_store';

enableScreens();

function App() {
  const hideSplashScreen = async () => {
    await hide({ fade: true });
  };

  useEffect(() => {
    persistor(hideSplashScreen);
  }, []);

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

export default App;
