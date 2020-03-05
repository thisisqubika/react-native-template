import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Colors from './helpers/Colors';
import { store, persist } from './reducers';
import Navigation from 'components/navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
});

export default function App() {
  const [ready, setReady] = useState(false);

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
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );

  return ready ? loaded : loading;
}
