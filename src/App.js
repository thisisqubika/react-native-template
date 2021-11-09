import React from 'react';
import { hide } from 'react-native-bootsplash';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/store';
import { networkService } from '@/networking';
import { RootNavigator } from '@/navigation';

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
        <GestureHandlerRootView style={{ flex: 1 }}>
          <RootNavigator />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}
