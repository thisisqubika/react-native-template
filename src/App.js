import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { store, persistor } from 'store';
import Navigation from 'components/navigation';
import { ColorScheme, DarkTheme, LightTheme } from 'helpers/Themes';
import { persistor, store } from 'store';

enableScreens();

function App() {
  const scheme = useColorScheme();

  useEffect(() => {
    persistor(RNBootSplash.hide);
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer
        theme={scheme === ColorScheme.DARK ? DarkTheme : LightTheme}
      >
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
