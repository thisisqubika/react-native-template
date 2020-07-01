import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import RNBootSplash from 'react-native-bootsplash';
import { enableScreens } from 'react-native-screens';
import { store, persist } from './reducers';
import Navigation from 'components/navigation';
import { ColorScheme, DarkTheme, LightTheme } from 'helpers/Themes';

enableScreens();

export default function App() {
  const scheme = useColorScheme();

  useEffect(() => {
    persist(() => {
      RNBootSplash.hide({ duration: 500 });
    });
  }, []);

  return (
    <Provider store={store}>
      <AppearanceProvider>
        <NavigationContainer
          theme={scheme === ColorScheme.DARK ? DarkTheme : LightTheme}
        >
          <Navigation />
        </NavigationContainer>
      </AppearanceProvider>
    </Provider>
  );
}
