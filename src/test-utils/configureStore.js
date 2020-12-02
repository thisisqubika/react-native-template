import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '_reducers';

const initialStore = { error: {}, status: {}, user: {} };

export default function configureStore(initialState = initialStore) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
