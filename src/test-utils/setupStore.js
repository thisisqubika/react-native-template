import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import userReducer from '@/features/user/userSlice';
import { STATUS } from '@/constants';

const initialStore = {
  user: {
    user: null,
    status: STATUS.NOT_STARTED,
    error: null,
  },
};

const rootReducer = combineReducers({ user: userReducer });

export function setupStore({ initialState = initialStore, demoMode = false, networkService = {} }) {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            networkService,
            demoMode,
          },
        },
      }),
  });
}
