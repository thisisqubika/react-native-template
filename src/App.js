import React from 'react';
import { hide } from 'react-native-bootsplash';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StyleSheet } from 'react-native';
import { RootNavigator } from './navigation';
import { persistor, store } from '@/store';
import { networkService } from '@/networking';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export function App() {
  const handleStoreRehydration = () => {
    const { accessToken } = store.getState().user;

    if (accessToken) {
      networkService.setAccessToken(accessToken);
    }

    hide();
  };

  return (
    <Provider store={store}>
      <PersistGate onBeforeLift={handleStoreRehydration} persistor={persistor}>
        <GestureHandlerRootView style={styles.container}>
          <RootNavigator />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}
