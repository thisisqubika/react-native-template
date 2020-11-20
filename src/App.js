import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { hide } from 'react-native-bootsplash';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import Navigation from 'navigation';
import { DarkTheme, LightTheme } from 'helpers/Themes';
import { DARK } from 'constants/colorScheme';
import { persistor, store } from 'store';

enableScreens();

function App() {
  const scheme = useColorScheme();

  const hideSplashScreen = async () => {
    await hide({ fade: true });
  };

  useEffect(() => {
    persistor(hideSplashScreen);
  }, []);

  return (
    <Provider store={store}>
      <Navigation theme={scheme === DARK ? DarkTheme : LightTheme} />
    </Provider>
  );
}

export default App;
