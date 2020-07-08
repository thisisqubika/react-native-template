import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from 'reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loading', 'error'],
};

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  applyMiddleware(thunk)
);

export const persistor = callback => {
  return persistStore(store, null, callback);
};
