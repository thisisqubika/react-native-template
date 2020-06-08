import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { store, persist } from './reducers';
import Navigation from 'components/navigation';
import { ColorScheme, DarkTheme, LightTheme } from 'helpers/Themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function App() {
  const [ready, setReady] = useState(false);
  const scheme = useColorScheme();

  useEffect(() => {
    persist(() => {
      setReady(true);
    });
  });

  const loading = (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );

  const loaded = (
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

  return ready ? loaded : loading;
}
