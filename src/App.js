import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import Navigation from 'navigation';
import { DarkTheme, LightTheme } from 'helpers/Themes';
import { DARK } from 'constants/colorScheme';
import { persistor, store } from 'store';

enableScreens();

function App() {
  const scheme = useColorScheme();

  useEffect(() => {
    persistor(RNBootSplash.hide);
  }, []);

  return (
    <Provider store={store}>
      <Navigation theme={scheme === DARK ? DarkTheme : LightTheme} />
    </Provider>
  );
}

export default App;
