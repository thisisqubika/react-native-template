import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import { enableScreens } from 'react-native-screens';
import { store, persistor } from 'store';
import Navigation from 'components/navigation';
import { ColorScheme, DarkTheme, LightTheme } from 'helpers/Themes';

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
