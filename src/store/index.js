import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';
import storage from 'storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['error', 'status'],
};

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  applyMiddleware(thunk)
);

export const persistor = callback => {
  return persistStore(store, null, callback);
};
