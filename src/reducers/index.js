import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './RootReducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['loading', 'error'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const rootStore = createStore(
  persistedReducer,
  applyMiddleware(thunk),
);

export const store = rootStore;

export const persist = callback => persistStore(rootStore, null, callback);
