import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '@/reducers';

const initialStore = { error: {}, status: {}, user: {} };

export function configureStore(initialState = initialStore) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
