import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import userReducer from '../features/user/userSlice';
import { networkService } from '@/networking';
import { storage } from '@/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
};

const rootReducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

let middlewares = [];

if (process.env.NODE_ENV === 'development') {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      thunk: {
        extraArgument: {
          networkService: networkService,
          demoMode: true,
        },
      },
    }).concat(middlewares);
  },
});

export const persistor = persistStore(store);
